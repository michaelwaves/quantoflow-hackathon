
"use client"
interface DatabaseError {
    code: string,
    constraint: string,
    detail: string,
    file: string,
    length: number,
    line: string,
    name: string,
    query: string,
    routine: string,
    schema: string,
    severity: string,
    table: string
}

import { X } from 'lucide-react';

function DatabaseErrorCard({ error }: { error: Partial<DatabaseError> }) {
    return (
        <div className="rounded-md p-4 bg-red-300 border border-red-400 overflow-auto flex items-center">
            <button className="text-white bg-red-600 rounded-full w-6 h-6 flex items-center justify-center mr-4">
                <X className="text-lg" /> 
            </button>

            <div>
                <h3>{error.detail || 'Missing Fields'}</h3>
            </div>
        </div>
    );
}

export default DatabaseErrorCard;