import { Router, ActivatedRoute } from '@angular/router';
import { Injectable, Input } from '@angular/core';

// import store
import { Store } from 'store';

// Models
import { Episode } from 'models/episode';
import { Serial } from 'models/serial';

// rxjs
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

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
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Episode;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
      // updating the store with the data
    }).do(next => this.store.set('episode', next));


  constructor(
    private store: Store,
    // to connect to the Cloud Firestore database
    private afs: AngularFirestore,
    private router: Router,
  ) {   }


  getEpisodeId(id: string) {
    if (!id) {
      return Observable.of({});
    }
    return this.store.select<Episode[]>('episode')
      .filter(Boolean)
      .map((episode: Episode[]) => episode.find((item: Episode) => item.id === id));
  }

  getEpisodes(SerialID: string) {

    return this.afs.collection('serial').doc(SerialID).collection('episode', ref => ref.orderBy('title')).snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Episode;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
        // updating the store with the data

      }).do(next => this.store.set('episode', next));
  }

 getEpisode(SerialID: string, EpisodeID: string) {
   this.episode$ = this.afs.collection('serial').doc(SerialID).collection('episode').doc(EpisodeID).valueChanges()
               .do(next => this.store.set('episode', next));
   return this.episode$;
  }

  backToEpisode() {
    this.router.navigate(['episode']);
  }
}
