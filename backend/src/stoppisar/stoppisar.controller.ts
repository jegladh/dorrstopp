import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import { StoppisarService } from './stoppisar.service';
import { Stoppisar } from 'src/entities/stoppisar.entity';



@Controller('stoppisar')
export class StoppisarController {
    constructor(private stoppisarService: StoppisarService){}
    @Get()
        read(): Promise<Stoppisar[]>{
            return this.stoppisarService.readAll();
        }
    @Post('create')
    async create(@Body() stoppisar: Stoppisar): Promise<any>{
        return this.stoppisarService.create(stoppisar);
    }
    @Put(':id/update')
    async update(@Param('id') id, @Body() stoppisar: Stoppisar): Promise<any>{
        stoppisar.id = Number(id);
        return this.stoppisarService.update(stoppisar);
    }
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any>{
        return this.stoppisarService.delete(id);
    }
}
