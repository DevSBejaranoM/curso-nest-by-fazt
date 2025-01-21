import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksServices } from './tasks.service';

@Module({
    controllers: [TasksController],
    providers: [TasksServices]
})
export class TasksModule {}
