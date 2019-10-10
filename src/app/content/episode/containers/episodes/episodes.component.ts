import { Store } from 'store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { EpisodeService } from 'content/shared/services/episode/episode.service';
import { Subscription } from 'rxjs/Subscription';
import { Episode } from 'models/episode';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {


  SerialID: any;
  item: any;

  episodes$ = this.episodeService.episodes$
              .map(res => this.item = res);

  constructor(
    private store: Store,
    private episodeService: EpisodeService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {


  }

  ngOnInit() {
    this.SerialID = this.route.snapshot.params.id;


  }




}
