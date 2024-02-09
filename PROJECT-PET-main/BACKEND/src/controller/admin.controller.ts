// admin.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete, Req } from '@nestjs/common';
import { AdminService } from 'src/services/admin.service';
import Admin from '../entitices/admin.entities';
import { CreateAdminDTO, UpdateAdminDTO } from '../pet.dto';


@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  create(@Body() admin: CreateAdminDTO):Promise<Admin> {
    return this.adminService.create(admin);
  }

  @Get()
  findAll(@Req() req:Request): Promise<Admin[]> {
    return this.adminService.findALL();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id')id: number, @Body() admin: UpdateAdminDTO):Promise<Admin | null> {
    return this.adminService.update(admin,id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.adminService.deleteById(id);
  }
}
