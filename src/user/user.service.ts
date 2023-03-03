import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private user: User[] = [
    {
      id: 1,
      name: 'mohamed',
      nationality: 'dz',
      job: ['dev', 'vendeur'],
    },
    {
      id: 2,
      name: 'amine',
      nationality: 'fr',
      job: ['dev', 'doc'],
    },
  ];

  findAll() {
    return this.user;
  }

  findOne(id: string) {
    return this.user.find((item) => item.id === +id);
  }

  create(createUserDto: any) {
    this.user.push(createUserDto);
  }

  update(id: string, updateUserDto: any) {
    const existingUser = this.findOne(id);
    if (existingUser) {
      //update the existing entity
    }
  }
  remove(id: string) {
    const userIndex = this.user.findIndex((item) => item.id === +id);
    if (userIndex >= 0) {
      this.user.splice(userIndex, 1);
    }
  }
}
