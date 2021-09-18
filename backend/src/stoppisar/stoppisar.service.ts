import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Stoppisar } from 'src/entities/stoppisar.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StoppisarService {
    constructor(
        @InjectRepository(Stoppisar)
        private stoppisarRepository: Repository<Stoppisar>
    ) { }
    async create(stoppisar: Stoppisar): Promise<Stoppisar> {
        return await this.stoppisarRepository.save(stoppisar);
    }
    async readAll(): Promise<Stoppisar[]> {
        return await this.stoppisarRepository.find();
    }
    async update(stoppisar: Stoppisar): Promise<UpdateResult> {
        return await this.stoppisarRepository.update(stoppisar.id,stoppisar);
    }
    async delete(id): Promise<DeleteResult> {
        return await this.stoppisarRepository.delete(id);
    }    
}


