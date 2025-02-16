"use server"
import { accounts } from "@/drizzle/schema";
import { db } from "..";

const getAllAccounts = async () => {
    return await db.select().from(accounts)
}

const insertAccounts = async (data: any[]) => {
    return await db.insert(accounts).values(data)
}
export { getAllAccounts, insertAccounts }