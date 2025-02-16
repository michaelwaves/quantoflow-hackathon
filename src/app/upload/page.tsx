import { buttonVariants } from "@/src/components/ui/button";
import Link from "next/link";

function UploadPage() {
    return (
        <div>
            <Link
                className={buttonVariants({ variant: "default" })}
                href="/upload/entities">Start Upload</Link>
        </div>
    );
}

export default UploadPage;