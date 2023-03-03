import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    //const { limit, offset } = paginationQuery;
    return this.userService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
  @Post()
  create(@Body() body) {
    return this.userService.create(body);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.userService.update(id, body);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
