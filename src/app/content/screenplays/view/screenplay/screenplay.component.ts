import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from 'store';

import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

import { SpService } from 'content/shared/services/screenplay/SpService';

import { Screenplay } from 'models/screenplay';
import { SeoService } from 'app/content/shared/services/seo/seo.service';
// import { a } from '@angular/core/src/render3';

@Component({
  selector: 'app-screenplay',
  templateUrl: './screenplay.component.html',
  styleUrls: ['./screenplay.component.sass']
})
export class ScreenplayComponent implements OnInit {
  // LinkID = this.route.snapshot.params.id;

  toggledContent = true;
  exists = false;

  screenplays$: Observable<Screenplay[]>;
  // shorts$: Observable<Screenplay[]>;
  short$: Observable<Screenplay>;
  // features$: Observable<Screenplay[]>;
  feature$: Observable<Screenplay>;
  // subscription: Subscription;

  constructor(
    private store: Store,
    private spService: SpService,
    private route: ActivatedRoute,
    private router: Router,
    private seo: SeoService
  ) {}

  ngOnInit() {
    const a = this.route.snapshot.url.shift();
    const id = this.route.snapshot.paramMap.get('id');

    if (a.path === 'short') {
      this.short$ = this.spService.getShort(id).pipe(
        tap((data: Screenplay) => {
          this.seo.generateTags({
            title: data.title,
            description: data.description,
            image: data.image,
            slug: data.id
          });
        })
      );
    } else {
      this.feature$ = this.spService.getFeature(id).pipe(
        tap((data: Screenplay) => {
          this.seo.generateTags({
            title: data.title,
            description: data.description,
            image: data.image,
            slug: data.id
          });
        })
      );
    }
  }

  toggleContent() {
    this.toggledContent = !this.toggledContent;
  }
}
