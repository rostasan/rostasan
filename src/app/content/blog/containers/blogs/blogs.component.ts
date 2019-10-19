import { Component, OnInit } from '@angular/core';
import { BlogService } from 'content/shared/services/blog/blog.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { SeoService } from 'app/content/shared/services/seo/seo.service';

@Component({
  selector: 'app-blogs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.sass']
})
export class BlogsComponent implements OnInit {
  data = {
    url: 'blog',
    title: 'Rostasan - Blog',
    description: 'Welcome to my blog. You\'ll find a mix of Web Development, writing, personal, and gaming subjects.',
    image: '../assets/images/background/BackgroundMain.png'
  };

  constructor(
    private blogService: BlogService,
    private seo: SeoService
  ) {

  }
  // Async pipe in the selector auto subscribes and unsubs also allows for onchange detection stategy
  blogs$ = this.blogService.blogs$;

  ngOnInit() {
    this.seo.generateTags({
      title: this.data.title,
      description: this.data.description,
      image: this.data.image,
      slug: this.data.url
    });
  }
}
