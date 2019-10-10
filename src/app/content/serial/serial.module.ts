import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';




// conatiners
import { SharedModule } from 'content/shared/shared.module';
import { SerialComponent } from 'content/serial/containers/serial/serial.component';
import { SerialsComponent } from 'content/serial/containers/serials/serials.component';
import { SerialService } from 'content/shared/services/serial/serial.service';



export const ROUTES: Routes = [
  { path: '', component: SerialsComponent },
  { path: ':id', component: SerialComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    SerialComponent,
    SerialsComponent],
    providers: [
      SerialService
    ],
    exports: [

    ]
})
export class SerialModule { }
