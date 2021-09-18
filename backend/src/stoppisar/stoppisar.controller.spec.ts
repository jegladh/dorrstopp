import { Test, TestingModule } from '@nestjs/testing';
import { StoppisarController } from './stoppisar.controller';

describe('StoppisarController', () => {
  let controller: StoppisarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoppisarController],
    }).compile();

    controller = module.get<StoppisarController>(StoppisarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
