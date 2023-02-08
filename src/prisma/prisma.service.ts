import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient{
    constructor(){
        super({
            datasources: {
                db: {
                    url: "postgresql://postgres:root@ec2-15-207-18-21.ap-south-1.compute.amazonaws.com:5432/mydb"
                },
            },
        })
    }
}
