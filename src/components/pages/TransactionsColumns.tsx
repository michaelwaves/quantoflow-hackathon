"use client"
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const columns = [
    columnHelper.accessor("id", {
        header: "Transaction ID",
    }),
    columnHelper.accessor("time_of_transaction", {
        header: "Time of Transaction",
    }),
    columnHelper.accessor("time_of_posting", {
        header: "Time of Posting",
    }),
    columnHelper.accessor("method_other", {
        header: "Method",
    }),
    columnHelper.accessor("reporting_entity_transaction_reference", {
        header: "Transaction Reference",
    }),
    columnHelper.accessor("purpose", {
        header: "Purpose",
    }),
    columnHelper.accessor("attempted_transaction_indicator", {
        header: "Attempted?",
        cell: ({ getValue }) => (getValue() ? "Yes" : "No"),
    }),
    columnHelper.accessor("reason_not_completed", {
        header: "Reason Not Completed",
    }),
    columnHelper.accessor("entry_type", {
        header: "Entry Type",
    }),
    columnHelper.accessor("amount", {
        header: "Amount",
        cell: ({ getValue }) => {
            const value = getValue() as number;
            return `$${value.toFixed(2)}`;
        },
    }),
    columnHelper.accessor("currency_code", {
        header: "Currency Code",
    }),
    columnHelper.accessor("exchange_rate", {
        header: "Exchange Rate",
        cell: ({ getValue }) => {
            const value = getValue() as number;
            return value?.toFixed(4);
        },
    }),
    columnHelper.accessor("value_in_canadian_dollars", {
        header: "Value in CAD",
        cell: ({ getValue }) => {
            const value = getValue() as number;
            return `$${value.toFixed(2)}`;
        },
    }),
    columnHelper.accessor("account_id", {
        header: "Account ID",
    }),
    columnHelper.accessor("account_status_at_time_of_transaction", {
        header: "Account Status",
    }),
];
