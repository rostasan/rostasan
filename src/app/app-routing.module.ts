import { NgModule, ModuleWithProviders } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'home/home.component';

// lazy load modules
import { EpisodeModule } from 'content/episode/episode.module';
import { ScreenplaysModule } from 'content/screenplays/screenplays.module';
import { ProseModule } from 'content/prose/prose.module';
import { PlaysModule } from 'content/plays/plays.module';
import { SerialModule } from 'content/serial/serial.module';
import { BlogModule } from 'content/blog/blog.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blog', loadChildren: () => BlogModule },
  { path: 'serial', loadChildren: () => SerialModule },
  { path: 'episode', loadChildren: () => EpisodeModule },
  { path: 'plays', loadChildren: () => PlaysModule },
  { path: 'prose', loadChildren: () => ProseModule },
  { path: 'screenplays', loadChildren: () => ScreenplaysModule }
  // { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  ModuleWithProviders = RouterModule.forRoot(routes);
}
