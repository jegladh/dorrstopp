import { Test, TestingModule } from '@nestjs/testing';
import { StoppisarService } from './stoppisar.service';

describe('StoppisarService', () => {
  let service: StoppisarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoppisarService],
    }).compile();

    service = module.get<StoppisarService>(StoppisarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
