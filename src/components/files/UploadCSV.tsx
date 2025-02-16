"use client"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "@/src/components/hooks/use-toast";
import { CSVArrayToJSON, CSVToArray } from "@/lib/utils";
import { useState } from "react";


function UploadCSV({ handleData }: { handleData: Function }) {
    const [files, setFiles] = useState<FileList | null>()
    const handleSubmit = async () => {
        if (!files) {
            console.log("Please upload a file")
            toast({
                title: "Please upload a file"
            })
            return
        }
        const file = files[0]
        const reader = new FileReader()
        reader.addEventListener(
            "load",
            async () => {
                try {
                    const data = CSVArrayToJSON(CSVToArray(reader.result as string))
                    handleData(data)
                    toast({
                        title: "File uploaded successfully"
                    })
                } catch (e) {
                    toast({
                        title: "Error uploading file"
                    })
                    console.error(e)
                }

            },
            false
        )
        if (file) {
            reader.readAsText(file);
        }

    }
    return (
        <div className="flex flex-col gap-2">
            <Input type="file" placeholder="upload csv" onChange={(e) => setFiles(e.target.files)} />
            <Button onClick={() => handleSubmit()} className="w-fit">Upload Data</Button>
        </div>
    );
}

export default UploadCSV;