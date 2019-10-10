import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupEpisodeComponent } from './list-group-episode.component';

describe('ListGroupEpisodeComponent', () => {
  let component: ListGroupEpisodeComponent;
  let fixture: ComponentFixture<ListGroupEpisodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGroupEpisodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGroupEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
