import { Table } from "@tanstack/react-table";
import GlobalSearch from "./GlobalSearch"
import CSVDownloadButton from "./CSVDownloadButton"
import { Dispatch, SetStateAction } from "react";
import { Filter, FilterX } from "lucide-react";
import Pagination from "./Pagination";
import { DataTableViewOptions } from "./DatatableViewOptions";


function CommandBar({ table, data, setFiltersOpen, filtersOpen }: { table: Table<any>, data: any[], setFiltersOpen: Dispatch<SetStateAction<boolean>>, filtersOpen: boolean }) {
    const downloadData = table.getFilteredSelectedRowModel().rows.map(r => r.original)
    return (
        <div className="flex flex-row gap-2 items-center pl-4 pt-4 flex-wrap md:flex-nowrap">
            <div className="w-full md:w-3/4">
                <GlobalSearch table={table} />
            </div>
            <div className="w-full md:w-auto">
                <Pagination table={table} />
            </div>
            <div className="w-full md:w-1/4 flex flex-row gap-2 items-center">
                <CSVDownloadButton data={downloadData.length == 0 ? data : downloadData} filename="Transactions" />
                {filtersOpen ?
                    <FilterX onClick={() => setFiltersOpen(false)} /> :
                    <Filter onClick={() => setFiltersOpen(true)} />}
            </div>
            <DataTableViewOptions table={table} />
        </div>
    );
}

export default CommandBar;