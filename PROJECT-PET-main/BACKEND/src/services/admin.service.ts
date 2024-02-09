import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminDTO,UpdateAdminDTO } from "src/pet.dto";
import Admin from '../entitices/admin.entities'
 
@Injectable()
export class AdminService {
 
    constructor(
        @InjectRepository(Admin)
        private adminRepository: Repository<Admin>
    ) {}
 
    async findALL(): Promise<Admin[]> {
        return this.adminRepository.find();
    }
 

    async findOne(id: number): Promise<Admin | null> {
        return await this.adminRepository.findOne({where: { id:id}});
    }
    
    
    async create(admin : CreateAdminDTO) : Promise<Admin | null> {
        return this.adminRepository.save(admin);
    }
 
    async update(update: UpdateAdminDTO,id: number): Promise<Admin | null> {
        const updateToAdmin = await this.adminRepository.findOne({where: { id:id}})
        if(!updateToAdmin){
            throw new NotFoundException('Error')
        }
        updateToAdmin.username = update.username;
        updateToAdmin.email = update.Email ;
        updateToAdmin.password = update.password ;
        updateToAdmin.phone = update.phone ;


        return await this.adminRepository.save(updateToAdmin);
    }
    
    async deleteById(id: number): Promise<void> {
        await this.adminRepository.delete(id);
    }
 
}