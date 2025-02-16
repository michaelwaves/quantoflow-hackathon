"use client"
import { DataTable } from "../tables/datatable";
import UploadCSV from "../files/UploadCSV";
import { useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { toast } from "../hooks/use-toast";
import DatabaseErrorCard from "../cards/DatabaseErrorCard";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";

function UploadValidate({ dataHandler, columns, exitHref }: { dataHandler: Function, columns: ColumnDef<any>[], exitHref: string }) {
    const [data, setData] = useState<any>([])
    const [databaseErrors, setDatabaseErrors] = useState<any>([])
    const [success, setSuccess] = useState<boolean>(false)
    const validateData = async (data: Record<string, string>[]) => {
        setData(data)
    }

    const handleUploadData = async () => {
        try {
            await dataHandler(data)
            setSuccess(true)
            toast({
                title: "Successfully imported Data"
            })
        } catch (e: any) {
            setSuccess(true)
            setDatabaseErrors(JSON.parse(e.message))//createEntities throws json serialized array of errors
            console.log(JSON.parse(e.message))
            toast({
                title: "Sucessfully Imported Data!"
            })
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <UploadCSV handleData={validateData} />
            <DataTable columns={columns} data={data} />
            <div className="mt-6">
                {databaseErrors && databaseErrors.length > 0 ? (
                    <>
                        <h3>Errors</h3>
                        <p className="text-sm my-2">Any errors will appear here. Search for the problematic row using the searchbar in step two, edit the csv, and re-upload.</p>
                        {databaseErrors.map((databaseError: any, index: number) => (
                            <p>Database Error</p>
                        ))}
                    </>
                ) : (
                    <></>
                )}
                <div className="flex flex-col gap-2 mt-6">
                    <h3>Step 3: Import Data to Database</h3>
                    <p className="text-sm">Once you verify the data looks good, click import to import into the database.</p>
                    <Button onClick={handleUploadData} className="w-fit">Import Data</Button>
                </div>
                {success &&
                    <div>
                        <h3>Success!</h3>
                        <p>Successfully uploaded the following rows of data</p>
                        <div>
                            <Link href={exitHref} className={buttonVariants({ variant: "default" })}>Exit</Link>
                        </div>
                        <DataTable columns={columns} data={data} />

                    </div>}
            </div>
        </div>
    );
}

export default UploadValidate;