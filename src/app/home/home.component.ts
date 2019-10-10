import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from 'app/store';
import { BlogService } from 'app/content/shared/services/blog/blog.service';
import { Blog } from 'models/blog';

import { SerialService } from 'app/content/shared/services/serial/serial.service';

import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  constructor(
    private blogService: BlogService,
    private serialService: SerialService,
    private title: Title,
    private meta: Meta
  ) {}

  // Async pipe in the selector auto subscribes and unsubs also allows for onchange detection stategy
  blogs$ = this.blogService.blogs$;
  serials$ = this.serialService.serials$;
}
