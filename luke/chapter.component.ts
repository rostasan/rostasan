import { Chapters } from './chapters';
import { Component, OnInit } from '@angular/core';
import { ProseService } from '../../shared/prose/prose.service';
import { Location } from '@angular/common'; // required to use the Back f

@Component({
  moduleId: module.id,
  selector: 'app-chapters',
  templateUrl: 'chapter.component.html',
  styleUrls: ['chapter.component.css'],

})
export class ChapterComponent implements OnInit {

  story: any;
  chapters: Chapters[];

  /**
   * Creates an instance of the ChapterComponent with the injected
   * ProseService.
   *
   * @param {ProseService} ProseService - The injected ProseService.
   */

  constructor(private proseService: ProseService,
              private location: Location) {}

  ngOnInit() {
    this.story = this.proseService.currentStory;
    this.chapters = this.story.Chapters;
  }

  goBack(): void {
    this.location.back();
  }
}
export interface Stories {
  $key?: string;
  StoryURL: string;
  title: string;
  Chapters: any[];

}
export interface Chapters {
  $key?: string;
  Chapter: string;
  URL: string;
  description: string;
  text: string;
  title: string;
}
