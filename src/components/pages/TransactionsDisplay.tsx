import { transactions } from "@/drizzle/schema";
import { db } from "@/src/db";
import { DataTable } from "../tables/datatable";
import { columns } from "./TransactionsColumns";


async function TransactionsDisplay() {
    const data = await db.select().from(transactions)
    return (
        <div>
            <DataTable columns={columns} data={data} />
        </div>
    );
}

export default TransactionsDisplay;