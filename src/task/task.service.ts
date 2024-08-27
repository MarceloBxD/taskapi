import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { TaskDTO } from './task.dto';

@Injectable()
export class TaskService {
  private tasks: TaskDTO[] = [];

  getAll() {
    return this.tasks;
  }

  createTask(task: TaskDTO) {
    return this.tasks.push(task);
  }

  findTaskById(id: string): TaskDTO {
    if (!id) return;

    if (!this.tasks.find((task) => task.id === id)) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    return this.tasks.find((task) => task.id === id);
  }

  updateTaskById(task: TaskDTO) {
    const taskIndex = this.tasks.findIndex((t) => t.id === task.id);

    if (taskIndex < 0) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    this.tasks[taskIndex] = task;
    return task;
  }

  deleteTaskById(id: string) {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks.splice(index, 1);
    return this.tasks;
  }
}
