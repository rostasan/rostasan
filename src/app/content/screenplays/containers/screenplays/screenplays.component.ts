import { Component, OnInit } from '@angular/core';
import { SpService } from 'content/shared/services/screenplay/SpService';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'app/content/shared/services/seo/seo.service';


@Component({
  selector: 'app-screenplays',
  templateUrl: './screenplays.component.html',
  styleUrls: ['./screenplays.component.scss']
})
export class ScreenplaysComponent implements OnInit {

    data = {
    url: '/screenplays',
    title: 'Rostasan - Screenplays',
    description: 'Here you will find a collection of feature length and short scripts.',
    image: '../assets/images/background/BackgroundMain.png'
  };

    screenplays$ = this.spService.screenplays$;
    shorts$ = this.spService.shorts$;
    features$ = this.spService.features$;

    ShortsID = this.route.snapshot.params.id;


  shortRoute: any;
  featureRoute: any;
  ShortID: any;

  constructor(
    private route: ActivatedRoute,
    private spService: SpService,
    private seo: SeoService
  ) { }

  ngOnInit() {
    this.ShortID = this.route.snapshot.params.id;
    this.shortRoute = 'short';

    this.featureRoute = 'feature';

    this.seo.generateTags({
      title: this.data.title,
      description: this.data.description,
      image: this.data.image,
      slug: this.data.url
    });
  }
}
