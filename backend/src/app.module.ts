import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stoppisar } from './entities/stoppisar.entity';
import { StoppisarService } from './stoppisar/stoppisar.service';
import { StoppisarController } from './stoppisar/stoppisar.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'dorrstopp',
      username: 'root',
      password: 'kilar123',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Stoppisar]),
  ],
  controllers: [AppController, StoppisarController],
  providers: [AppService, StoppisarService],
})
export class AppModule {}
