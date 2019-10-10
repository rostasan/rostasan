import { Injectable } from '@angular/core';

// import store
import { Store } from 'app/store';

// Models
import { Blog } from 'models/blog';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

// firebase
import {
  AngularFirestore,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { shareReplay } from 'rxjs/operators';

@Injectable()
export class BlogService {
  blogDoc: AngularFirestoreDocument<Blog>;

  // Observable stream for the filestore collection
  blogs$: Observable<Blog[]> = this.afs
    .collection('blog', ref => ref.orderBy('timestamp', 'desc'))
    .snapshotChanges()
    .pipe(shareReplay())
    // map operator to get the document ID
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Blog;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
      // updating the store with the data
    })
    .do(next => this.store.set('blog', next));

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
      return Observable.of({});
    }
    return this.store
      .select<Blog[]>('blog')
      .filter(Boolean)
      .map(blog => blog.find((item: Blog) => item.id === id));
  }

  getBlogTitle(customId: string) {
    if (!customId) {
      return Observable.of({});
    }
    return this.store
      .select<Blog[]>('blog')
      .filter(Boolean)
      .map(blog => blog.find((item: Blog) => item.title === customId));
  }
}
