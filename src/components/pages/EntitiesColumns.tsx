"use client"
import { createColumnHelper } from "@tanstack/react-table";
import { Button } from "../ui/button";

const columnHelper = createColumnHelper();

export const columns = [

    columnHelper.accessor("entity_type", {
        header: "Entity Type",
    }),
    columnHelper.accessor("id", {
        header: "Entity ID",
    }),
    columnHelper.accessor("email_address", {
        header: "Email Address",
    }),
    columnHelper.accessor("name", {
        header: "Name",
    }),
    columnHelper.accessor("surname", {
        header: "Surname",
    }),
    columnHelper.accessor("given_name", {
        header: "Given Name",
    }),
    columnHelper.accessor("other_name_initial", {
        header: "Other Name Initial",
    }),
    columnHelper.accessor("address", {
        header: "Address",
    }),
    columnHelper.accessor("telephone_number", {
        header: "Telephone Number",
    }),
    columnHelper.accessor("extension_number", {
        header: "Extension Number",
    }),
    columnHelper.accessor("date_of_birth", {
        header: "Date of Birth",
    }),
    columnHelper.accessor("country_of_residence_code", {
        header: "Country of Residence Code",
    }),
    columnHelper.accessor("country_of_citizenship_code", {
        header: "Country of Citizenship Code",
    }),
    columnHelper.accessor("occupation", {
        header: "Occupation",
    }),
    columnHelper.accessor("url", {
        header: "URL",
        cell: ({ getValue }) => (
            <a href={getValue()} target="_blank" rel="noopener noreferrer">
                {getValue()}
            </a>
        ),
    }),
];


const handleSearch = async (row: any) => {
    console.log(row)
    try {
        const locationRes = await fetch(`http://localhost:8000/search_location_info?address=${encodeURIComponent(row.original.address)}`);
        const adverseMediaRes = await fetch(`http://localhost:8000/adverse_media_search?entity=${encodeURIComponent(row.original.name)}`);

        const locationData = await locationRes.json();
        const adverseMediaData = await adverseMediaRes.json();

        // Combine results into one object
        const results = {
            location: locationData,
            adverse_media: adverseMediaData
        };

        // Convert JSON object to a string
        const jsonString = JSON.stringify(results, null, 2);

        // Create a Blob with JSON content
        const blob = new Blob([jsonString], { type: "application/json" });

        // Create a temporary download link
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "search_results.json";
        document.body.appendChild(a);
        a.click();

        // Cleanup
        document.body.removeChild(a);
        URL.revokeObjectURL(a.href);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
export const extendedColumns = [

    {
        id: "search",
        header: "Search!",
        cell: ({ row }: { row: any }) => <Button onClick={() => handleSearch(row)}>Conduct Search ✨</Button>
    },
    ...columns,  // Spread the existing columns array
];
