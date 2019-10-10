import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenplayComponent } from './screenplay.component';

describe('ScreenplayComponent', () => {
  let component: ScreenplayComponent;
  let fixture: ComponentFixture<ScreenplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
