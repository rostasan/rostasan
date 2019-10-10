import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';




// conatiners
import { SharedModule } from 'content/shared/shared.module';
import { EpisodeComponent } from 'content/episode/containers/episode/episode.component';
import { EpisodesComponent } from 'content/episode/containers/episodes/episodes.component';
import { EpisodeService } from 'content/shared/services/episode/episode.service';



export const ROUTES: Routes = [
  { path: '', component: EpisodesComponent },
  { path: 'serial/:SerialID/episode/:id', component: EpisodeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    EpisodeComponent,
    EpisodesComponent],
    providers: [
      EpisodeService
    ],
    exports: [
    ]
})
export class EpisodeModule { }
