"use server"
import { entities } from "@/drizzle/schema";
import { db } from "..";

const getAllEntities = async () => {
    return await db.select().from(entities)
}

const insertEntities = async (data: any[]) => {
    return await db.insert(entities).values(data)
}

const clearEntities = async () => {
    return await db.delete(entities)
}
export { getAllEntities, insertEntities, clearEntities }