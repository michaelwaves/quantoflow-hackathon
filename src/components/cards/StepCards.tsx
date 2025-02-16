import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

interface stepCardProps {
    title: string,
    text?: string,
    href: string,
    buttonText?: string,
    buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

function StepCard(
    { title, text, href, buttonText, buttonVariant }: stepCardProps
) {
    return (
        <div className="w-80 h-48 p-2 px-4 rounded-xl border shadow-md flex flex-col justify-between">
            <h3 className="text-md font-semibold py-4">{title}</h3>
            <p>{text}</p>
            <Link href={href} className={cn(buttonVariants({ variant: buttonVariant ?? 'default' }))}>{buttonText ?? "Start"}</Link>
        </div>
    );
}

export default StepCard;