import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class SeoService {
  constructor(
    private meta: Meta,
    private titleService: Title
    ) {}
    item: any;

    generateTags(tags) {

      // Set a title
      this.titleService.setTitle(tags.title);

      // Twitter Meta Tags
      this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
      this.meta.updateTag({ name: 'twitter:site', content: '@angularfirebase' });
      this.meta.updateTag({ name: 'twitter:title', content: tags.title });
      this.meta.updateTag({ name: 'twitter:description', content: tags.description });
      this.meta.updateTag({ name: 'twitter:image', content: tags.image });

      // Facebook Meta Tags
      this.meta.updateTag({ property: 'og:type', content: 'article' });
      this.meta.updateTag({ property: 'og:site_name', content: 'AngularFirebase' });
      this.meta.updateTag({ property: 'og:title', content: tags.title });
      this.meta.updateTag({ property: 'og:description', content: tags.description });
      this.meta.updateTag({ property: 'og:image', content: tags.image });
      this.meta.updateTag({ property: 'og:url', content: `https://rostasan.com/${tags.slug}` });

      // google search engine
      this.meta.updateTag({ itemprop: 'name', content: tags.title });
      this.meta.updateTag({ itemprop: 'description', content: tags.description });
      this.meta.updateTag({ itemprop: 'image', content: tags.image });

}
  generateTagsDetail(item) {
      // set title
      this.titleService.setTitle(this.item.title);

      // google search engine
      this.meta.updateTag({ itemprop: 'name', content: this.item.title });
      this.meta.updateTag({ itemprop: 'description', content: this.item.description });
      this.meta.updateTag({ itemprop: 'image', content: this.item.image });

      // Twitter Meta Tags
      this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
      this.meta.updateTag({ name: 'twitter:title', content: this.item.title });
      this.meta.updateTag({ name: 'twitter:description', content: this.item.description });
      this.meta.updateTag({ name: 'twitter:image', content: this.item.image });

      // Facebook Meta Tags
      this.meta.updateTag({ property: 'og:type', content: 'website' });
      this.meta.updateTag({ property: 'og:url', content: `https://yourapp.com/${item.slug}`});
      this.meta.updateTag({ property: 'og:title', content: this.item.title });
      this.meta.updateTag({ property: 'og:description', content: this.item.description });
      this.meta.updateTag({ property: 'og:image', content: this.item.image });

      this.meta.updateTag({ name: 'description', content: this.item.description });
  }
}
