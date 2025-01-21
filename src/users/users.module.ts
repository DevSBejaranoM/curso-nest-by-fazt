import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  //* Uso de middelwares
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('users'); //* Aplica el middleware a todas las rutas de users
    // consumer.apply(LoggerMiddleware).forRoutes(
    //   {
    //     path: '/users',
    //     method: RequestMethod.GET,
    //   },
    //   {
    //     path: '/users',
    //     method: RequestMethod.POST,
    //   },
    // ); //* Aplica el middleware a la ruta /users solo si es un GET o un POST
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('users')
      .apply(AuthMiddleware)
      .forRoutes('users'); //* Aplica los dos middlewares a la ruta /users
  }
}
