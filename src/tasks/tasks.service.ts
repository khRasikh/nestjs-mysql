import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepo: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    return `This action adds a new task: ${createTaskDto}`;
  }

  findAll(): Promise<Task[]> {
    return this.tasksRepo.find();
  }

  findOne(id: number): Promise<Task> {
    return this.tasksRepo.findOneBy({ id });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task is: ${updateTaskDto}`;
  }

  async remove(id: string): Promise<void> {
    await this.tasksRepo.delete(id);
  }
}
