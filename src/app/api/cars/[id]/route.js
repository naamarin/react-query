import { NextResponse } from 'next/server';
import { deleteDocument, connectDatabase } from '@/services/mongo';

export async function DELETE(req, params) {
    console.log(params.params.id);
    const client = await connectDatabase();
    const result = await deleteDocument(client, 'cars', params.params.id);
    return NextResponse.json(result);
}