import UploadDataFlow from "../data-import/UploadDataFlow";
import { Button } from "../ui/button";
import { columns } from "./EntitiesColumns"
import { clearEntities, insertEntities } from "@/src/db/tables/entities";
function AccountsUpload() {
    const data = [{
        entity_type: "",
        id: "",
        email_address: "",
        name: "",
        surname: "",
        given_name: "",
        other_name_initial: "",
        address: "",
        telephone_number: "",
        extension_number: "",
        date_of_birth: "",
        country_of_residence_code: "",
        country_of_citizenship_code: "",
        occupation: "",
        url: ""
    }]

    return (
        <div>
            <div>
                Try deleting all entities in your database if there's a duplicate key error
                <Button onClick={clearEntities} value="destructive" className="bg-red-500">Delete all Entities</Button>
            </div>
            <UploadDataFlow
                data={data} templateName="quantoflow_entities-" columns={columns} exitHref="/display/entities" dataHandler={insertEntities} />
        </div>
    );
}

export default AccountsUpload;