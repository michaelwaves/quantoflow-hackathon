import { Table } from "@tanstack/react-table";
import { Input } from "../ui/input";

function GlobalSearch({ table }: { table: Table<any> }) {
    return (
        <div>
            <Input
                value={table.getState().globalFilter}
                onChange={e => table.setGlobalFilter(String(e.target.value))}
                placeholder="Search..."
            />
        </div>
    );
}

export default GlobalSearch;