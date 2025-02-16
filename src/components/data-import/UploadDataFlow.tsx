import { ColumnDef } from "@tanstack/react-table";
import DownloadCSV from "../files/DownloadCSV";
import UploadValidate from "./UploadValidate";

interface UploadDataFlowProps {
    data: Record<string, string>[] //initial data in template
    templateName?: string
    dataHandler: Function //function for actually uploading data, e.g createEntities
    columns: any //list of colunmnDefs for showing data
    exitHref: string //href to exit to once data upload flow is complete, e.g./dashboard/clients/individuals
}

function UploadDataFlow({ data, templateName, columns, exitHref, dataHandler }: UploadDataFlowProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="mb-6">
                <div>
                    <h3>Step 1: Download Template</h3>
                    <p className="text-sm my-2">Download a csv template with required fields</p>
                </div>
                <DownloadCSV data={data} filename={`${templateName ?? "quantoflow-template"}-${new Date().toISOString().split('T')[0]}`} />
            </div>
            <div>
                <h3>Step 2: Fill in and Upload Template</h3>
                <p className="text-sm my-2">Upload the filled in template to preview the data</p>
                <UploadValidate columns={columns} dataHandler={dataHandler} exitHref={exitHref} />
            </div>

        </div>
    );
}

export default UploadDataFlow;