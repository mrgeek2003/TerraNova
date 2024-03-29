import { TestBed } from '@angular/core/testing';

import { TerraBotService } from './terra-bot.service';

describe('TerraBotService', () => {
  let service: TerraBotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerraBotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
