

import { Screenplay } from 'models/screenplay';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';

// conatiners
import { ScreenplaysComponent } from './containers/screenplays/screenplays.component';
import { SharedModule } from 'content/shared/shared.module';
import { ScreenplayComponent } from './view/screenplay/screenplay.component';
import { SpService } from 'content/shared/services/screenplay/SpService';


export const ROUTES: Routes = [
  { path: '', component: ScreenplaysComponent },
  { path: 'feature/:id', component: ScreenplayComponent },
  { path: 'short/:id', component: ScreenplayComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    ScreenplaysComponent,
    ScreenplayComponent
  ],
    providers: [
      SpService,
      AngularFireStorage
  ],
  exports: [

  ]
})
export class ScreenplaysModule { }
