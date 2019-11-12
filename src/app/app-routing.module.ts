import { NgModule, ModuleWithProviders } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'home/home.component';

// lazy load modules



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blog', loadChildren: () => import('content/blog/blog.module').then(m => m.BlogModule) },
  { path: 'serial', loadChildren: () => import('content/serial/serial.module').then(m => m.SerialModule)  },
  { path: 'episode', loadChildren: () => import('content/episode/episode.module').then(m => m.EpisodeModule)  },
  { path: 'plays', loadChildren: () => import('content/plays/plays.module').then(m => m.PlaysModule)  },
  { path: 'prose', loadChildren: () => import('content/prose/prose.module').then(m => m.ProseModule)  },
  { path: 'screenplays', loadChildren: () => import('content/screenplays/screenplays.module').then(m => m.ScreenplaysModule)  }
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
