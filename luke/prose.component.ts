import { FirebaseService } from './../shared/firebase/firebase.service';
import { Component, OnInit } from '@angular/core';
import { ProseService } from '../shared/prose/prose.service';

@Component({
      moduleId: module.id,
      selector: 'app-story',
      templateUrl: 'prose.component.html',
      styleUrls: ['prose.component.css']
})

export class ProseComponent  implements OnInit {
  stories: Array<any>;

    constructor(private _firebaseService: FirebaseService,
                private _proseService: ProseService) {}

    ngOnInit() {
      this._firebaseService.getStories()
      .subscribe((stories: any) => {
        this.stories = stories;
      });
    }

  /**
   * Story link click event handler
   * @param story
   */
  onStoryClick(story): void {
      console.log('story clicked:', story);
      this._proseService.currentStory = story;
    }
}
