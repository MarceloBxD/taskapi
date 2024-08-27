import { TaskService } from './task.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskDTO } from './task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAll(): TaskDTO[] {
    return this.taskService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string): TaskDTO {
    return this.taskService.findTaskById(id);
  }

  @Post()
  create(@Body() task: TaskDTO): void {
    this.taskService.createTask(task);
  }

  @Delete('/:id')
  delete(@Param('id') id: string): void {
    this.taskService.deleteTaskById(id);
  }

  @Put()
  updateTask(@Body() task: TaskDTO): TaskDTO {
    return this.taskService.updateTaskById(task);
  }
}
