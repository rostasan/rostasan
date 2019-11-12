import { Injectable } from '@angular/core';

// import store
import { Store } from 'store';

// Models
import { Screenplay } from 'models/screenplay';

// rxjs
import { Observable, of } from 'rxjs';

import { shareReplay, map, tap, filter } from 'rxjs/operators';


// firebase
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';



@Injectable()
export class SpService {

  ScreenplayDoc: AngularFirestoreDocument<Screenplay>;

  // Observable stream for the filestore collection
  screenplays$: Observable<Screenplay[]> = this.afs.collection('screenplay').snapshotChanges()
    // map operator to get the document ID
    .pipe(
      map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Screenplay;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
      // updating the store with the data
    }),
    tap(next => this.store.set('screenplay', next)));

  shorts$: Observable<Screenplay[]> = this.afs.collection('shorts').snapshotChanges()
    // map operator to get the document ID
    .pipe(
      map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Screenplay;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
      // updating the store with the data
    }),
    tap(next => this.store.set('shorts', next)));

  features$: Observable<Screenplay[]> = this.afs.collection('features').snapshotChanges()
    // map operator to get the document ID
   .pipe(
      map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Screenplay;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
      // updating the store with the data
    }),
    tap(next => this.store.set('features', next)));


  constructor(
    private store: Store,
    // to connect to the Cloud Firestore database
    private afs: AngularFirestore,
  ) { }

  // short service
  getShort(id: string) {
    if (!id) {
      return of({});
    }
    return this.store.select<Screenplay[]>('shorts')
      .pipe(
        filter(Boolean),
        map((short: Screenplay[]) => short.find((item: Screenplay) => item.id === id)));
  }

  getShortTitle(customId: string) {
    if (!customId) {
      return of({});
    }
    return this.store.select<Screenplay[]>('shorts')
      .pipe(
        filter(Boolean),
        map((short: Screenplay[]) => short.find((item: Screenplay) => item.title === customId)));
  }
// END Short Service
// Feature Service
  getFeature(id: string) {
    if (!id) {
      return of({});
    }
    return this.store.select<Screenplay[]>('features')
      .pipe(
        filter(Boolean),
        map((short: Screenplay[]) => short.find((item: Screenplay) => item.id === id)));
  }

  getFeatureTitle(customId: string) {
    if (!customId) {
      return of({});
    }
    return this.store.select<Screenplay[]>('features')
      .pipe(
        filter(Boolean),
        map((feature: Screenplay[]) => feature.find((item: Screenplay) => item.title === customId)));
  }
}
