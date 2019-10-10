
import { Episode } from 'models/episode';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { tap } from 'rxjs/operators';

// interfaces
import { Serial } from 'models/serial';


// services
import { SerialService } from 'content/shared/services/serial/serial.service';
import { EpisodeService } from 'content/shared/services/episode/episode.service';

import { Store } from 'store';
import { SeoService } from 'app/content/shared/services/seo/seo.service';

@Component({
  selector: 'app-serial',
  templateUrl: './serial.component.html',
  styleUrls: ['./serial.component.sass']
})
export class SerialComponent implements OnInit {



  SerialID: any;


  toggledContent = true;
  exists = false;

  serials$: Observable<Serial[]>;
  episodes$: Observable<Episode[]>;
  serial$: Observable<Serial>;
  subscription: Subscription;
  currentRoute: any;



  constructor(
    private store: Store,
    private serialService: SerialService,
    private episodeService: EpisodeService,
    private router: Router,
    private route: ActivatedRoute,
    private seo: SeoService
  ) { }

  // serials$ = this.serialService.serials$;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.serial$ = this.serialService.getSerial(id).pipe(
      tap(data => {
        this.seo.generateTags({
          title: data.title,
          description: data.description,
          image: data.image,
          slug: data.id
        });
      })
    );
    this.currentRoute = this.router.url;

    // this.subscription = this.serialService.serials$.subscribe();
    // this.serials$ = this.store.select<Serial[]>('serial');
    // this.serial$ = this.route.params
    //   .switchMap(paramMap => this.serialService.getSerial(paramMap.id));

    this.SerialID = this.route.snapshot.params.id;

    this.episodes$ = this.store.select<Episode[]>('episode');
    this.subscription = this.episodeService.getEpisodes(this.SerialID).subscribe();

  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
  backToSerial() {
    this.router.navigate(['serial']);
  }
  toggleContent() {
    this.toggledContent = !this.toggledContent;

  }
  getRouteEpisode() {
    // dollar-sign curly-bracket is a ES6 string literal. This allows the route to be shared between upper level components
    return [`${this.currentRoute}/episode/new`];
  }


}
