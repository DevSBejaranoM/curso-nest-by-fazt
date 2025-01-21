import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/crete-user.dto';

@Injectable()
export class UsersService {
  private users: any = [];

  getUsers() {
    return this.users;
  }

  createUser(user: CreateUserDto) {
    this.users.push({
      ...user,
    });

    return {
      ...user,
      id: this.users.length + 1,
    };
  }
}
