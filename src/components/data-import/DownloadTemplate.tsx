"use client"
import DownloadCSV from "../files/DownloadCSV";

function DownloadTemplate() {

    const individualData = {
        id: "internal-company-id",
        given_name: "John",
        surname: "Doe",
        other_name_initial: "D",
        name: "",
        email_address: "john.doe@gmail.com",
        address: "321 sesame street",
        telephone_number: "",
        entity_type: "Individual"
    }

    const companyData = {
        id: "internal-company-id",
        given_name: "",
        surname: "",
        other_name_initial: "",
        name: "Some Company Inc.",
        email_address: "company@gmail.com",
        address: "123 Sesame St.",
        telephone_number: "123 456 7890",
        entity_type: "Entity"
    }

    const data = [individualData, companyData]
    return (
        <DownloadCSV data={data} filename={`quantoflow_client_upload_template-${new Date().toISOString().split('T')[0]}`} />
    );
}

export default DownloadTemplate;