import type { Metadata } from "next";
import DivisionPage from "../components/DivisionPage";
export const metadata: Metadata = { title: "Initials Flux | FAE-R INC.", description: "First aid training, workplace safety workshops and safety audit inquiries." };
export default function Page() { return <DivisionPage service="training"/>; }
