import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/pluck';
import { tap } from 'rxjs/operators';

// interfaces
import { Episode } from 'models/episode';


// services
import { EpisodeService } from 'content/shared/services/episode/episode.service';

import { Store } from 'store';
import { SeoService } from 'app/content/shared/services/seo/seo.service';


@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  SerialID: any;
  EpisodeID: any;
  toggledContent = true;
  exists = false;

  episodes$: Observable<Episode[]>;
  episode$: Observable<Episode>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private episodeService: EpisodeService,
    private router: Router,
    private route: ActivatedRoute,
    private seo: SeoService
  ) { }


  ngOnInit() {
    this.EpisodeID = this.route.snapshot.params.id;
    this.SerialID = this.route.snapshot.params.SerialID;

    this.episode$ = this.episodeService.getEpisode(this.SerialID, this.EpisodeID).pipe(
      tap(data => {
        this.seo.generateTags({
          title: data.title,
          description: data.description,
          image: data.image,
          slug: data.id
        });
      })
    );
  }


  backToEpisode() {
    this.router.navigate(['episode']);
  }
  toggleContent() {
    this.toggledContent = !this.toggledContent;
  }
}
