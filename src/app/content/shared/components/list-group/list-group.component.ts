import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.sass']
})
export class ListGroupComponent {

  @Input()
  item: any;

  @Input()
  featureRoute: any;

  @Input()
  shortRoute: any;

  @Output()
  remove = new EventEmitter<any>();

  toggled = false;
  currentRoute: any;

  removeItem() {
    this.remove.emit(this.item.id);

  }

  toggle() {
    this.toggled = !this.toggled;

  }
  getRoute(item: any) {
    if (this.shortRoute) {
      return [this.shortRoute, item.id];
    } else if (this.featureRoute) {
      return [this.featureRoute, item.id];
    }
    return ['/', item.path, item.id];
  }
}

