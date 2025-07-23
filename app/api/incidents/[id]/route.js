import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function PATCH(_,{params}) {
    const incident = await prisma.incident.update({
        where: {id: parseInt(parse.id)},
        data: {resolved: true},
    });

    return Response.json(incident);
}