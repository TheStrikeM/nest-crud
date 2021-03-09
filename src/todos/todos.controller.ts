import {Body, Controller, Delete, Get, Param, Post, Put, Query} from "@nestjs/common";
import {TodosService} from "./todos.service";
import TodoDto from "./dto/TodoDto";
import { ObjectId } from "mongoose";


@Controller('todos')
export class TodosController {

    constructor(private todosService: TodosService) {}

    @Get()
    getAll(
        @Query('limit') count: number,
        @Query('page') offset: number
    ) {
        return this.todosService.getAll(count, offset)
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.todosService.getOne(id)
    }

    @Post()
    create(@Body() dto: TodoDto) {
        return this.todosService.create(dto)
    }

    @Put()
    update(@Body() dto: TodoDto) {
        return this.todosService.update(dto)
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.todosService.delete(id)
    }
}