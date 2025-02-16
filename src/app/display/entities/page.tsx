import { entities } from "@/drizzle/schema";
import { columns, extendedColumns } from "@/src/components/pages/EntitiesColumns";
import { DataTable } from "@/src/components/tables/datatable";
import { db } from "@/src/db";

async function DisplayPage() {
    const entityData = await db.select().from(entities)
    return (
        <DataTable columns={extendedColumns} data={entityData} />
    );
}

export default DisplayPage;