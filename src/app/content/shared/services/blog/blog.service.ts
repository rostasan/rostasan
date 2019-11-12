import { Injectable } from '@angular/core';

// firebase
import { AngularFirestore } from '@angular/fire/firestore';

// import store
import { Store } from 'app/store';

// Models
import { Blog } from 'models/blog';

// rxjs
import { Observable, of } from 'rxjs';






import { shareReplay, map, tap, filter } from 'rxjs/operators';


@Injectable()
export class BlogService {


  // Observable stream for the filestore collection
  blogs$: Observable<Blog[]> = this.afs
    .collection('blog', ref => ref.orderBy('timestamp', 'desc'))
    .snapshotChanges()
    .pipe(shareReplay())
    // map operator to get the document ID
    .pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Blog;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
      // updating the store with the data
    }),
    tap(next => this.store.set('blog', next)));

  constructor(
    private store: Store,
    // to connect to the Cloud Firestore database
    private afs: AngularFirestore
  ) {}

  // get user hash ID from firebase, I may use this later to create user specific db entries
  // get uid() {
  //   return this.authService.user.uid;
  // }

  getBlog(id: string) {
    if (!id) {
      return of({});
    }
    return this.store
      .select<Blog[]>('blog')
      .pipe(
      filter(Boolean),
      map((blog: Blog[]) => blog.find((item: Blog) => item.id === id)));
  }

  getBlogTitle(customId: string) {
    if (!customId) {
      return of({});
    }
    return this.store
      .select<Blog[]>('blog')
      .pipe(
        filter(Boolean),
      map((blog: Blog[]) => blog.find((item: Blog) => item.title === customId)));
  }
}
