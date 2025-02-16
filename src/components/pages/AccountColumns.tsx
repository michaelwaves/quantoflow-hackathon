"use client"
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const columns = [
    columnHelper.accessor("id", {
        header: "Account ID",
    }),
    columnHelper.accessor("entity_id", {
        header: "Entity ID",
    }),
    columnHelper.accessor("financial_institution_number", {
        header: "Financial Institution #",
    }),
    columnHelper.accessor("branch_number", {
        header: "Branch #",
    }),
    columnHelper.accessor("routing_numer", {
        header: "Routing #",
    }),
    columnHelper.accessor("swift_code", {
        header: "SWIFT Code",
    }),
    columnHelper.accessor("country", {
        header: "Country",
    }),
    columnHelper.accessor("number", {
        header: "Account Number",
    }),
    columnHelper.accessor("type", {
        header: "Account Type",
    }),
    columnHelper.accessor("currency", {
        header: "Currency",
    }),
    columnHelper.accessor("identification_obtained", {
        header: "Identification Obtained?",
        cell: ({ getValue }) => (getValue() ? "Yes" : "No"),
    }),
    columnHelper.accessor("date_opened", {
        header: "Date Opened",
    }),
    columnHelper.accessor("date_closed", {
        header: "Date Closed",
    }),
    columnHelper.accessor("last_transaction_at", {
        header: "Last Transaction",
    }),
    columnHelper.accessor("balance", {
        header: "Balance",
        cell: ({ getValue }) => {
            const value = getValue() as number;
            return `$${value}`;
        },
    }),
];