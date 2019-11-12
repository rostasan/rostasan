import { SeoService } from 'app/content/shared/services/seo/seo.service';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';


import { BlogService } from 'app/content/shared/services/blog/blog.service';
import { SerialService } from 'app/content/shared/services/serial/serial.service';



@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  data = {
    url: 'home',
    title: 'Rostasan - Home',
    description: 'Welcome to Rostasan. You\'ll find a mix of Web Development, writing, personal, and gaming subjects.',
    keywords: 'Rostasan, creative writing, screenplays, scripts, stories, sci-fi',
    image: '../assets/images/background/BackgroundMain.png'
  };


  constructor(
    private blogService: BlogService,
    private serialService: SerialService,
    private seo: SeoService
  ) {}
  // Async pipe in the selector auto subscribes and unsubs also allows for onchange detection stategy
  blogs$ = this.blogService.blogs$;
  serials$ = this.serialService.serials$;

  ngOnInit() {
    console.log(this.data.keywords);
    this.seo.generateTags({
      title: this.data.title,
      description: this.data.description,
      keywords: this.data.keywords,
      image: this.data.image,
      slug: this.data.url
    });
  }
}
