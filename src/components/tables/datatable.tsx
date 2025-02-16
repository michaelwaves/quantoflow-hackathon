"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table"
import CommandBar from "./CommandBar"
import { useState } from "react"
import FilterPanel from "./FilterPanel"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[],
    actionButtons?: React.FC<{ table: ReturnType<typeof useReactTable<any>> }>[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
    actionButtons
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageIndex: 0,
                pageSize: 15
            }
        }
    })

    const [filtersOpen, setFiltersOpen] = useState<boolean>(false)

    return (
        <div className="rounded-md border w-full">
            <CommandBar table={table} data={data} setFiltersOpen={setFiltersOpen} filtersOpen={filtersOpen} />
            {
                actionButtons &&
                <div className="flex flex-row gap-2 items-center py-2 px-4">
                    {actionButtons.map((ActionButton, index) => <ActionButton key={index} table={table} />
                    )}
                </div>
            }
            <div className="flex flex-row gap-2 w-full">
                <Table className="w-full overflow-scroll">
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                {filtersOpen && <FilterPanel table={table} />}
            </div>
        </div>
    )
}
