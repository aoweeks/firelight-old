import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeScreenComponent } from './bridge-screen.component';

describe('BridgeScreenComponent', () => {
  let component: BridgeScreenComponent;
  let fixture: ComponentFixture<BridgeScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridgeScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
