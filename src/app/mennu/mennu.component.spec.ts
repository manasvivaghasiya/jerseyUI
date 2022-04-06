import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MennuComponent } from './mennu.component';

describe('MennuComponent', () => {
  let component: MennuComponent;
  let fixture: ComponentFixture<MennuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MennuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MennuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
