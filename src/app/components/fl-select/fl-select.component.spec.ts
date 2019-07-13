import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlSelectComponent } from './fl-select.component';

describe('FlSelectComponent', () => {
  let component: FlSelectComponent;
  let fixture: ComponentFixture<FlSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
