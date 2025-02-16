import { Table } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function Pagination({ table }: { table: Table<any> }) {
    return (
        <div className="flex flex-row gap-2 items-center">
            <Button
                variant="outline"
                onClick={() => table.firstPage()}
                disabled={!table.getCanPreviousPage()}
                className="ml-auto hidden h-8 lg:flex"
            >
                {'<<'}
            </Button>
            <Button
                variant="outline"
                className="ml-auto hidden h-8 lg:flex"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
            >
                {'<'}
            </Button>
            <div className="flex flex-row gap-2 items-center text-xs">
                <span>Page:</span>
                <Input className="w-10"
                    value={table.getState().pagination.pageIndex + 1}
                    onChange={(e) => table.setPageIndex(Number(e.target.value))} />
                <span>/{table.getPageCount()}</span>
            </div>
            <Button
                variant="outline"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="ml-auto hidden h-8 lg:flex"
            >
                {'>'}
            </Button>
            <Button
                variant="outline"
                onClick={() => table.lastPage()}
                disabled={!table.getCanNextPage()}
                className="ml-auto hidden h-8 lg:flex"
            >
                {'>>'}
            </Button>
            <select
                value={table.getState().pagination.pageSize}
                onChange={e => {
                    table.setPageSize(Number(e.target.value))
                }}
            >
                {[10, 20, 30, 40, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                        {pageSize}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Pagination;