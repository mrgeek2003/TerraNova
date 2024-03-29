import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerraBotComponent } from './terra-bot.component';

describe('TerraBotComponent', () => {
  let component: TerraBotComponent;
  let fixture: ComponentFixture<TerraBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TerraBotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerraBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
