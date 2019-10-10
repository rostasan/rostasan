import {
  Component,
  OnInit,
  Injectable,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { User } from './models/user';
import { Store } from './store';

import './operators';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { MetatagService } from './content/shared/services/metatag/metatag.service';

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
  @ViewChild('toggledContact', { static: false }) ToggledContact;

  subscription: Subscription;
  user$: Observable<User>;
  contactDisplay = true;

  constructor(private router: Router, private store: Store) {}
  ngOnInit() {
    this.user$ = this.store.select<User>('user');
  }

  toggle() {
    this.contactDisplay = !this.contactDisplay;
  }
}
