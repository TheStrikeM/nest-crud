import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';

const dbConnectURI =
  'mongodb+srv://admin:admin@cluster0.yj5xp.mongodb.net/nextjs-learn?retryWrites=true&w=majority';

@Module({
  imports: [
    TodosModule,
    MongooseModule.forRoot(dbConnectURI)
  ],
})
export class AppModule {}
