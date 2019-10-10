import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-blog.view',
  templateUrl: './blog.view.component.html',
  styleUrls: ['./blog.view.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogViewComponent implements OnInit {

  collapse = true;

  constructor() { }

  ngOnInit() {
  }

}
