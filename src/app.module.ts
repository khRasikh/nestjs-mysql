import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'rasikh123',
    database: 'mysql',
    entities: [],
    synchronize: true,
  }), TypeOrmModule.forFeature([Task]), TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
