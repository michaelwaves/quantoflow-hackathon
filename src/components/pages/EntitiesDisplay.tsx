import { entities } from "@/drizzle/schema";
import { db } from "@/src/db";
import { DataTable } from "../tables/datatable";
import { columns, extendedColumns } from "./EntitiesColumns";

async function EntitiesDisplay() {
    const data = await db.select().from(entities)
    console.log(extendedColumns[0])
    return (
        <div>
            <DataTable columns={columns} data={data} />
        </div>
    );
}

export default EntitiesDisplay;