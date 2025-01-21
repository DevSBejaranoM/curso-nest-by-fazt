import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validateUser/validateUser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {
  @Get('/')
  index(@Req() request: Request, @Res() response: Response) {
    response.status(200).json({
      message: 'Hello World!',
    });
  }

  @Get('/notfoudn')
  @HttpCode(404)
  notFoundPage() {
    return '404 Not Found';
  }

  @Get('/errorpage')
  @HttpCode(500)
  errorPage() {
    return 'Error route';
  }

  @Get('/ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    return num + 14;
  }

  @Get('/active/:status')
  @UseGuards(AuthGuard)
  getStatus(@Param('status', ParseBoolPipe) status: boolean) {
    return status;
  }

  @Get('/greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateUserPipe) query: {name: string, age: number}){
    const {name, age} = query;
    return `Hello ${name}, you are ${age + 55} years old`;
  }
}
