import { accounts } from "@/drizzle/schema";
import { db } from "@/src/db";
import { DataTable } from "../tables/datatable";
import { columns } from "./AccountColumns";

async function AccountsDisplay() {
    const data = await db.select().from(accounts)
    return (
        <DataTable columns={columns} data={data} />
    );
}

export default AccountsDisplay;