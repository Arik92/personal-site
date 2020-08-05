import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailComponent } from './detail/detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'pixel-art', component: ComingSoonComponent },  
  { path: 'games', component: ComingSoonComponent },  
  { path: 'about', component: ComingSoonComponent },  
  { path: 'contact', component: ComingSoonComponent },   
  { path: 'detail/:title', component: DetailComponent },
  { path: '**', component:  NotFoundComponent } // 404 catch all route.
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
