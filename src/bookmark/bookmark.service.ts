import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookmarkDto } from './dto';

@Injectable()
export class BookmarkService {
    constructor(private prisma: PrismaService){}


    getBookmarks(userId: number){
        return this.prisma.bookmark.findMany({
            where : {
                userId
            }
        });
    }


    getBookmarkById(userId: number, bookmarkId: number){
        return this.prisma.bookmark.findFirst({
            where : {
                id: bookmarkId,
                userId
            }
        });
    }

    async createBookmark(userId: number, dto: CreateBookmarkDto){
        const bookmark = await this.prisma.bookmark.create({
            data : {
                userId,
                ...dto
            },
        });

        return bookmark;
    }

    editBookmarkById(){}

    deleteBookmark(){}
}
