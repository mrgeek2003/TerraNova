import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropComponent } from './add-prop.component';

describe('AddPropComponent', () => {
  let component: AddPropComponent;
  let fixture: ComponentFixture<AddPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPropComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
