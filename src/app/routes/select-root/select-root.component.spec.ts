import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRootComponent } from './select-root.component';

describe('SelectRootComponent', () => {
  let component: SelectRootComponent;
  let fixture: ComponentFixture<SelectRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
