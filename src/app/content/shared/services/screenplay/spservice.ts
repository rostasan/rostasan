import { Injectable } from '@angular/core';

// import store
import { Store } from 'store';

// services


// Models
import { Screenplay } from 'models/screenplay';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

// firebase
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';



@Injectable()
export class SpService {

  ScreenplayDoc: AngularFirestoreDocument<Screenplay>;

  // Observable stream for the filestore collection
  screenplays$: Observable<Screenplay[]> = this.afs.collection('screenplay').snapshotChanges()
    // map operator to get the document ID
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Screenplay;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
      // updating the store with the data
    }).do(next => this.store.set('screenplay', next));

  shorts$: Observable<Screenplay[]> = this.afs.collection('shorts').snapshotChanges()
    // map operator to get the document ID
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Screenplay;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
      // updating the store with the data
    }).do(next => this.store.set('shorts', next));

  features$: Observable<Screenplay[]> = this.afs.collection('features').snapshotChanges()
    // map operator to get the document ID
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Screenplay;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
      // updating the store with the data
    }).do(next => this.store.set('features', next));


  constructor(
    private store: Store,
    // to connect to the Cloud Firestore database
    private afs: AngularFirestore,
  ) { }

  // short service
  getShort(id: string) {
    if (!id) {
      return Observable.of({});
    }
    return this.store.select<Screenplay[]>('shorts')
      .filter(Boolean)
      .map(short => short.find((short: Screenplay) => short.id === id));
  }

  getShortTitle(customId: string) {
    if (!customId) {
      return Observable.of({});
    }
    return this.store.select<Screenplay[]>('shorts')
      .filter(Boolean)
      .map(short => short.find((short: Screenplay) => short.title === customId));
  }
// END Short Service
// Feature Service
  getFeature(id: string) {
    if (!id) {
      return Observable.of({});
    }
    return this.store.select<Screenplay[]>('features')
      .filter(Boolean)
      .map(short => short.find((feature: Screenplay) => feature.id === id));
  }

  getFeatureTitle(customId: string) {
    if (!customId) {
      return Observable.of({});
    }
    return this.store.select<Screenplay[]>('features')
      .filter(Boolean)
      .map(feature => feature.find((feature: Screenplay) => feature.title === customId));
  }
}
