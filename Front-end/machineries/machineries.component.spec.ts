import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineriesComponent } from './machineries.component';

describe('MachineriesComponent', () => {
  let component: MachineriesComponent;
  let fixture: ComponentFixture<MachineriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
