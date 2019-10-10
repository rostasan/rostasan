import { Episode } from 'models/episode';
import { Router } from '@angular/router';
import { Serial } from 'models/serial';

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-group-episode',
  templateUrl: './list-group-episode.component.html',
  styleUrls: ['./list-group-episode.component.sass']
})
export class ListGroupEpisodeComponent implements OnInit {

  @Input()
  item: any;

  @Output()
  remove = new EventEmitter<any>();

  toggled = false;
  currentRoute: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentRoute = this.router.url;
  }
  removeItem() {
    this.remove.emit(this.item.id);

  }

  toggle() {
    this.toggled = !this.toggled;

  }
  getRoute(item: any) {
    // dollar-sign curly-bracket is a ES6 string literal. This allows the route to be shared between upper level components
    return [`${this.currentRoute}`, 'episode', item.id];
  }
}
