import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
// import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pixel-art', component: ComingSoonComponent },  
  { path: 'games', component: ComingSoonComponent },  
  { path: 'about', component: ComingSoonComponent },  
  { path: 'contact', component: ContactComponent },   
  { path: 'detail/:title', component: DetailComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' } // Until a 404 is implemented
  // { path: '**', component:  NotFoundComponent } // 404 catch all route.
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})], // , {useHash: true}
  exports: [RouterModule]
})
export class AppRoutingModule { }
