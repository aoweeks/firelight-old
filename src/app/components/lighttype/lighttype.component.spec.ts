import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LighttypeComponent } from './lighttype.component';

describe('LighttypeComponent', () => {
  let component: LighttypeComponent;
  let fixture: ComponentFixture<LighttypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LighttypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LighttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
