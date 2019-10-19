import { Store } from 'store';
import { Component, OnInit } from '@angular/core';
import { SerialService } from 'content/shared/services/serial/serial.service';

import { SeoService } from 'app/content/shared/services/seo/seo.service';


@Component({
  selector: 'app-serials',
  templateUrl: './serials.component.html',
  styleUrls: ['./serials.component.scss']
})
export class SerialsComponent implements OnInit {
  data = {
    url: 'serial',
    title: 'Rostasan - Serials',
    description: 'Serials. Here you will find a list of stories I am currenly writing in serial.',
    image: '../assets/images/background/BackgroundMain.png'
  };

  constructor(
    private store: Store,
    private serialService: SerialService,
    private seo: SeoService
  ) { }

    serials$ =  this.serialService.serials$;

  ngOnInit() {
    this.seo.generateTags({
      title: this.data.title,
      description: this.data.description,
      image: this.data.image,
      slug: this.data.url
    });
  }

}
