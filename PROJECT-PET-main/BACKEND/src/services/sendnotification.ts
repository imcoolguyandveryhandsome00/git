import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import SendNotification from "src/entitices/sendnotification.entities";
import User from "src/entitices/user.entities";
import CreateSendNotification from "src/pet.dto";
@Injectable()
export class SendNotificationService {
    constructor(
        @InjectRepository(SendNotification)
        private notificationRepository: Repository<SendNotification>,
      ) {}
      getstatus() : string{
        return "OK";
      }
      findAll() : Promise<SendNotification[]>{
        return this.notificationRepository.find();
      }
      findOne(id : number) : Promise<SendNotification | null>{
        return this.notificationRepository.findOneBy({id:id});
      }
      async DeleteQuryBuilder(id: number) : Promise<void>{
        await this.notificationRepository.delete({id:id})
      }
      create(SendNotification : CreateSendNotification) : Promise<SendNotification | null>{
       return this.notificationRepository.save(SendNotification)
      }
      async sendNotificationToUser(user: User,message: string): Promise<void> {
       //const message = "มีของมาส่งจ้า";
       console.log(`Sending notification to user ${user.username}: ${message}`);
      }
      //Warning
      async sendDeletionNotificationToUser(user: User): Promise<void> {
       const title = "ลบจริงป่าวคุณน้า";
       const message = `ใบเสร็จสำหรับการสั่งซื้อของคุณ`;
       console.log(`Sending deletion notification to  ${user.username}: Your post has been deleted.`);
      }
}