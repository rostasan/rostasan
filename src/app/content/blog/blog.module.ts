import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// conatiners
import { BlogComponent } from './containers/blog/blog.component';
import { BlogsComponent } from './containers/blogs/blogs.component';
import { BlogViewComponent } from './containers/blog.view/blog.view.component';

// components


// Shared Module
import { SharedModule } from 'content/shared/shared.module';
// services
import { BlogService } from 'content/shared/services/blog/blog.service';
import { SeoService } from '../shared/services/seo/seo.service';
// pipes
import { TransformPipe } from 'app/transform.pipe';







export const ROUTES: Routes = [
  { path: '', component: BlogsComponent },
  { path: ':id', component: BlogComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    BlogComponent,
    BlogsComponent,
    TransformPipe,
    BlogViewComponent
  ],
  providers: [BlogService, SeoService],
  exports: [BlogComponent, BlogViewComponent]
})
export class BlogModule {}
