import type { Metadata } from "next";
import DivisionPage from "../components/DivisionPage";
export const metadata: Metadata = { title: "Medical Supplies | FAE-R INC.", description: "First aid kits, replenishment and AED equipment requests for organizations." };
export default function Page() { return <DivisionPage service="medical"/>; }
