import { Column } from "@tanstack/react-table";
import { MultiSelect } from "../MultiSelect";
import { useMemo } from "react";

function ColumnFilter({ column }: { column: Column<any> }) {

    const columnValues = useMemo(() => (column?.getFacetedUniqueValues ?
        Array.from(column.getFacetedUniqueValues().keys())
        : []), [])

    // Check and convert date values
    const formattedColumnValues = useMemo<any>(() => {
        return columnValues.map((value) => {
            // Check if the value is a valid date
            const date = new Date(value);
            const isDate = typeof value === 'object' && value !== null
            return isDate
                ? { label: date.toLocaleDateString(), value } // Format date for display
                : { label: String(value), value }; // Non-date value as-is
        })
    }, [columnValues]);

    const handleValueChange = (selectedValues: string[]) => {
        column?.setFilterValue(selectedValues)
    }
    return (
        <div>
            <p className="text-sm font-semibold">{column.id}</p>
            <MultiSelect
                options={formattedColumnValues}
                onValueChange={handleValueChange} // Update filter value
            />
        </div>

    );
}

export default ColumnFilter;