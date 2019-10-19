import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { tap } from 'rxjs/operators';

import { Blog } from 'models/blog';

// services
import { BlogService } from 'content/shared/services/blog/blog.service';
import { SeoService } from 'app/content/shared/services/seo/seo.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {

  imgExists: boolean;
  blog$: Observable<Blog>;

  constructor(
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute,
    private seo: SeoService,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.blog$ = this.blogService.getBlog(id).pipe(
        tap((blog: Blog) => {
          this.seo.generateTags({
            title: blog.title,
            description: blog.description,
            image: blog.image,
            slug: blog.id
          });
        })
    );

  }



  backToBlog() {
    this.router.navigate(['blog']);
  }
}
