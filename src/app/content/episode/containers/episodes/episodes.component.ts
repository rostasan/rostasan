import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodeService } from 'content/shared/services/episode/episode.service';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {


  SerialID: any;
  item: any;

  episodes$ = this.episodeService.episodes$
              .pipe(
              map(res => this.item = res));

  constructor(
    private episodeService: EpisodeService,
    private route: ActivatedRoute,
  ) {


  }

  ngOnInit() {
    this.SerialID = this.route.snapshot.params.id;


  }




}
