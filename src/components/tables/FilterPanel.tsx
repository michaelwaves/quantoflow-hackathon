import { Table } from "@tanstack/react-table";
import ColumnFilter from "./ColumnFilter";

function FilterPanel({ table }: { table: Table<any> }) {

    const columns = table.getAllColumns()

    return (
        <div className="w-[300px]">
            <h3>Filters</h3>
            {columns.map((c) => {
                if (c.id != "select") {
                    return <ColumnFilter key={c.id} column={c} />
                }
            })}
        </div>
    );
}

export default FilterPanel;