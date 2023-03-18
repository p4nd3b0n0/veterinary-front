import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuttonsComponent } from './formbuttons.component';

describe('FormbuttonsComponent', () => {
  let component: FormbuttonsComponent;
  let fixture: ComponentFixture<FormbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbuttonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
