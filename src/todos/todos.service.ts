import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model, ObjectId} from "mongoose";
import {Todo, TodoDocument} from "./schema/Todo";
import TodoDto from "./dto/TodoDto";


@Injectable()
export class TodosService {

    constructor(
        @InjectModel(Todo.name) private todoModel: Model<TodoDocument>
    ) {}

    async getAll(count = 10, offset = 0): Promise<Todo[]> {
        return this.todoModel.find().skip(Number(offset)).limit(Number(count));
    }

    async getOne(id: ObjectId): Promise<Todo> {
        return this.todoModel.findById(id)
    }

    async create(dto: TodoDto): Promise<Todo> {
        return await this.todoModel.create({...dto})
    }

    async update(dto: TodoDto): Promise<Todo> {
        return this.todoModel.findOneAndUpdate({ ...dto });
    }

    async delete(id: ObjectId): Promise<ObjectId> {
        const deletedTodo = await this.todoModel.findByIdAndDelete(id)
        return deletedTodo._id
    }
}