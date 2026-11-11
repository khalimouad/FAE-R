-- Applied to FAE-R Supabase project xavnqtqdkeahbyomjelm
-- Recalculate persisted quote subtotals after line changes.
create or replace function public.fae_recalculate_quote_subtotal()
returns trigger language plpgsql security invoker set search_path = ''
as $$
declare quote_uuid uuid;
begin
 quote_uuid := coalesce(new.quotation_id, old.quotation_id);
 update public.fae_quotations q
 set subtotal_cents = coalesce((
  select round(sum(l.quantity * l.unit_price_cents))::bigint
  from public.fae_quotation_lines l
  where l.quotation_id = quote_uuid
 ), 0)
 where q.id = quote_uuid;
 return null;
end;
$$;
revoke all on function public.fae_recalculate_quote_subtotal() from public, anon, authenticated;
drop trigger if exists fae_lines_recalculate on public.fae_quotation_lines;
create trigger fae_lines_recalculate after insert or update or delete
on public.fae_quotation_lines for each row
execute function public.fae_recalculate_quote_subtotal();
