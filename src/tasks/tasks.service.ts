import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksServices {
  private tasks: any = [
    {
      id: 1,
      title: 'Mi primera tarea',
      description: 'Esta es mi primera tarea',
    },
    {
      id: 2,
      title: 'Mi segunda tarea',
      description: 'Esta es mi segunda tarea',
    },
  ];

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);
    if (!taskFound) {
      return new NotFoundException(`Task with id ${id} not found`);
    }
    return taskFound;
  }

  createTask(task: CreateTaskDto) {
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }

  updateTask(task: UpdateTaskDto) {
    return 'Updating a task';
  }

  deleteTask() {
    return 'Deleting a task';
  }

  updateTaskStatus() {
    return 'Updating task status';
  }
}
