import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemstatusComponent } from './systemstatus.component';

describe('SystemstatusComponent', () => {
  let component: SystemstatusComponent;
  let fixture: ComponentFixture<SystemstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
