import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';

@Controller('bookmark')
export class BookmarkController {
    constructor(private bookmarkService: BookmarkService){}

    @Get()
    getBookmarks(){}

    @Get(':id')
    getBookmarkById(){}

    @Post()
    createBookmark(){}

    @Patch(':id')
    editBookmarkById(){}

    @Delete(':id')
    deleteBookmark(){}
}
