import { Router, ActivatedRoute } from '@angular/router';
import { Injectable, Input } from '@angular/core';

// import store
import { Store } from 'store';

// Models
import { Episode } from 'models/episode';
import { Serial } from 'models/serial';

// rxjs
import { Subscription ,  Observable, of } from 'rxjs';


import { map, tap, filter } from 'rxjs/operators';


// firebase
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class EpisodeService  {

  @Input()
  id: any;

  EpisodeDoc: AngularFirestoreDocument<Episode>;
  SerialID: any;
  subscription: Subscription;
  serial$: Observable<Serial>;
  episode$: Observable<Episode>;

  episodes$: Observable<Episode[]> = this.afs.collection('serial').snapshotChanges()


  // map operator to get the document ID
    .pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Episode;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
      // updating the store with the data
    }),
    tap(next => this.store.set('episode', next)));


  constructor(
    private store: Store,
    // to connect to the Cloud Firestore database
    private afs: AngularFirestore,
    private router: Router,
  ) {   }


  getEpisodeId(id: string) {
    if (!id) {
      return of({});
    }
    return this.store.select<Episode[]>('episode')
      .pipe(
        filter(Boolean),
        map((episode: Episode[]) => episode.find((item: Episode) => item.id === id)));
  }

  getEpisodes(SerialID: string) {

    return this.afs.collection('serial').doc(SerialID).collection('episode', ref => ref.orderBy('title')).snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Episode;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
          // updating the store with the data
        }),
        tap(next => this.store.set('episode', next)));
  }

 getEpisode(SerialID: string, EpisodeID: string) {
   this.episode$ = this.afs.collection('serial').doc(SerialID).collection('episode').doc(EpisodeID).valueChanges()
               .pipe(tap(next => this.store.set('episode', next)));
   return this.episode$;
  }

  backToEpisode() {
    this.router.navigate(['episode']);
  }
}
