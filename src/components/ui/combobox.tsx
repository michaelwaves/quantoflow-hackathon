"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { PopoverTrigger, Popover, PopoverContent } from "../ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";

type ComboboxValue = {
    label: string,
    value: string
}

type ComboboxProps = {
    values: ComboboxValue[],
    setValue: any,
    value: string,
    defaultValue?: string
}

function Combobox({ values, setValue, value, defaultValue }: ComboboxProps) {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between flex">
                    {
                        value ?
                            values.find((c) => c.value === value)?.label :
                            defaultValue ?? "Select"
                    }
                    <ChevronDown className="h-4 mx-2 cursor-pointer text-muted-foreground" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput placeholder="Search ..." className="pl-2 h-9" />
                    <CommandList>
                        <CommandEmpty>No results.</CommandEmpty>
                        <CommandGroup>
                            {values.map((c) => (
                                <CommandItem
                                    key={c.value}
                                    value={c.value}
                                    onSelect={(v) => {
                                        setValue(v === value ? "" : v)
                                        setOpen(false)
                                    }}>
                                    {c.label}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value == c.value ? "opacity-100" : "opacity-0"
                                        )} />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

export default Combobox;