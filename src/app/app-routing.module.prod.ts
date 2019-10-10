
import { NgModule, ModuleWithProviders } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'home/home.component';




//  lazy loaded modules
import { EpisodeModule } from 'content/episode/episode.module';
import { ScreenplaysModule } from 'content/screenplays/screenplays.module';
import { ProseModule } from 'content/prose/prose.module';
import { PlaysModule } from 'content/plays/plays.module';
import { SerialModule } from 'content/serial/serial.module';
import { BlogModule } from 'content/blog/blog.module';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'blog',  loadChildren: 'app/content/blog/blog.module#BlogModule' },
    { path: 'serial',  loadChildren: 'app/content/serial/serial.module#SerialModule' },
    { path: 'episode',  loadChildren: 'app/content/episode/episode.module#EpisodeModule' },
    { path: 'plays',  loadChildren: 'app/content/plays/plays.module#PlaysModule' },
    { path: 'prose',  loadChildren: 'app/content/prose/prose.module#ProseModule' },
    { path: 'screenplays',  loadChildren: 'app/content/screenplays/screenplays.module#ScreenplaysModule' }

];




@NgModule({
    imports: [RouterModule.forRoot(routes, { })],
    exports: [RouterModule]
})

export class AppRoutingModule { ModuleWithProviders = RouterModule.forRoot(routes);
}
