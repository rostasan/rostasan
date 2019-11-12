import {
  Component,
  OnInit,
  Injectable,
  ViewChild
} from '@angular/core';

import { User } from './models/user';
import { Store } from './store';

import './operators';
import { Observable ,  Subscription } from 'rxjs';


/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.sass'],
  providers: []
})
@Injectable() // <<<=== required if the constructor has parameters
export class AppComponent implements OnInit {
  @ViewChild('toggledContact', { static: false }) ToggledContact: any;

  subscription: Subscription;
  user$: Observable<User>;
  contactDisplay = true;

  constructor(private store: Store) {}
  ngOnInit() {
    this.user$ = this.store.select<User>('user');
  }

  toggle() {
    this.contactDisplay = !this.contactDisplay;
  }
}
