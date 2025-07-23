import { PrismaClient } from "@prisma/client";
import { actionAsyncStorage } from "next/dist/server/app-render/action-async-storage.external";
const prisma = new PrismaClient();

async function name() {
    await prisma.incident.deleteMany();
    await prisma.camera.deleteMany();

    const cameras = await prisma.camera.createMany({
        data: [
            { name: "camera 01", location: "vault" },
            { name: "camera 02", location: "Shop floor A"},
            { name: "camera 03", location: "Entrance"}
        ],
    });

    const cameraList = await prisma.camera.findMany();

    const incidentData = [
        {
            type: "Unauthorised Access",
            tsStart: new Date("2025-07-07T14:35:00"),
            tsEnd: new Date("2025-07-07T14:37:00"),
            thumbnailUrl: "/thumbnails/incident1.jpg",
            resolved: false,
            cameraId: cameraList[0].id
        },
        {
            type: "Gun Threat",
            tsStart: new Date("2025-07-07T14:35:00"),
            tsEnd: new Date("2025-07-07T14:37:00"),
            thumbnailUrl: "/thumbnails/incident2.jpg",
            resolved: false,
            cameraId: cameraList[1].id
        },
        {
            type: "Gun Threat",
            tsStart: new Date("2025-07-07T14:35:00"),
            tsEnd: new Date("2025-07-07T14:37:00"),
            thumbnailUrl: "/thumbnails/incident2.jp",
            resolved: false,
            cameraId: cameraList[1].id
        },
    ];

    for (const incident of incidentData){
        await prisma.incident.create({data: incident});
    }
}

main()
.catch((e)=> console.error(e))
.finally(()=> prisma.$disconnect());
