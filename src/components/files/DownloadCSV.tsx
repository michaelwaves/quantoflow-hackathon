"use client"
import { Button } from "../ui/button";
import { toast } from "@/src/components/hooks/use-toast";
import { downloadCsv } from "@/lib/utils";
function DownloadCSV({ data, filename }: { data: Record<string, string>[], filename: string }) {

    const handleDownloadTemplate = async () => {
        try {
            const csv = downloadCsv(data, filename)
            toast({
                "title": "Successfully downloaded CSV"
            })
        } catch (e) {
            console.error(e)
        }
    }
    return (
        <Button
            onClick={handleDownloadTemplate}
        >Download Template</Button>
    );
}

export default DownloadCSV;