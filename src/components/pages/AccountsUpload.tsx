import UploadDataFlow from "../data-import/UploadDataFlow";
import { columns } from "./AccountColumns"
import { insertAccounts } from "@/src/db/tables/accounts";

function AccountsUpload() {
    const data = [{
        id: "",
        entity_id: "",
        financial_institution_number: "",
        branch_number: "",
        routing_numer: "",
        swift_code: "",
        country: "",
        number: "",
        type: "",
        currency: "",
        identification_obtained: "",
        date_opened: "",
        date_closed: "",
        last_transaction_at: "",
        balance: ""
    }]

    return (
        <div>
            <UploadDataFlow
                data={data} templateName="quantoflow_accounts-" columns={columns} exitHref="/dashboard/accounts" dataHandler={insertAccounts} />
        </div>
    );
}

export default AccountsUpload;