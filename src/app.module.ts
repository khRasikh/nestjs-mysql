import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'rasikh123',
      database: 'mysql',
      entities: [],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Task]),
    TasksModule,
  ],
})
export class AppModule {}
