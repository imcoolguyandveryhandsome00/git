import { Body, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';
import { UserService } from 'src/services/user.service';
import { SendNotificationService } from 'src/services/sendnotification';
import SendNotification from 'src/entitices/sendnotification.entities';
import CreateSendNotification from 'src/pet.dto';
@Controller('SendNotification')
export default class SendNotificationController {
  constructor(private readonly SendNotificationService: SendNotificationService,private userService : UserService) {}

  @Get('status')
  getStatus() : string{
    return this.SendNotificationService.getstatus();
  }
  @Get()
  getIndex(@Req() request : Request): Promise<SendNotification[]> {
    return this.SendNotificationService.findAll();
  }
  @Get(':id')
    getByid(@Param('id') id : number) : Promise<SendNotification>{
        return this.SendNotificationService.findOne(id)
    }
  @Delete(":id")
  deleteuserById(@Param('id') id :number) : string{
    this.SendNotificationService.DeleteQuryBuilder(id)
    return "OK,Very Good Kub."
  }
  
  @Roles(Role.Admin)
  @Post('onlyadmin')
  onlyAdminCreat(@Body() createSendNotification :CreateSendNotification ):Promise<SendNotification>{
    return this.SendNotificationService.create(createSendNotification)
  }
  @Post('sendNotificationToUser')
  async sendNotificationToUser(@Body() data: any) {
    const { userId, message } = data;
    const user = await this.userService.findOne(userId);
    if (user) {
      await this.SendNotificationService.sendNotificationToUser(user, message);
      return { success: true };
    }
    return { success: false, message: 'User not found' };
  }

  @Post('sendDeletionNotificationToUser')
  async sendDeletionNotificationToUser(@Body() data: any) {
    const { userId, postId } = data;
    const user = await this.userService.findOne(userId);
    if (user) {
      return { success: true };
    }
    return { success: false, message: 'User not found' };
  }
}