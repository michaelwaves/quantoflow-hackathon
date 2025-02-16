"use server"
import { transactions } from "@/drizzle/schema";
import { db } from "..";

const getAllTransactions = async () => {
    return await db.select().from(transactions)
}

const insertTransactions = async (data: any[]) => {
    return await db.insert(transactions).values(data)
}
export { getAllTransactions, insertTransactions }