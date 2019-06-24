import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeWindowComponent } from './bridge-window.component';

describe('BridgeWindowComponent', () => {
  let component: BridgeWindowComponent;
  let fixture: ComponentFixture<BridgeWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridgeWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgeWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
