
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// thirdparty modules
import { AngularFireDatabaseModule } from 'angularfire2/database';

// components
import { ListItemComponent } from 'content/shared/components/list-item/list-item.component';
import { ViewComponent } from 'content/shared/components/view/view.component';
import { ListGroupComponent } from 'content/shared/components/list-group/list-group.component';
import { ListGroupEpisodeComponent } from 'content/shared/components/list-group-episode/list-group-episode.component';
import { ViewFeatureComponent } from 'content/shared/components/view-feature/view-feature.component';

// pipes
import { DownloadUrlPipe } from './pipes/pipes';

import { PdfViewerModule } from 'ng2-pdf-viewer';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFireDatabaseModule,
    PdfViewerModule
  ],
  declarations: [
    ListItemComponent,
    ViewComponent,
    ListGroupComponent,
    ListGroupEpisodeComponent,
    DownloadUrlPipe,
    ViewFeatureComponent

  ],
  exports: [
    ListItemComponent,
    ViewComponent,
    ListGroupComponent,
    ListGroupEpisodeComponent,
    DownloadUrlPipe,
    ViewFeatureComponent
  ]
})
export class SharedModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: SharedModule,
  //     providers: []
  //   };
  // }
}
