import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sprincipal/components/pages/home/home.component';
import { ContactComponent } from './sprincipal/components/pages/contact/contact.component';
import { AboutComponent } from './sprincipal/components/pages/about/about.component';
import { TeamComponent } from './sprincipal/components/pages/team/team.component';
import { PromotionComponent } from './sprincipal/components/pages/promotion/promotion.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' }, // Redirecionar para 'home'
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'equipe', component: TeamComponent },
  { path: 'promocao', component: PromotionComponent },
  { path: 'contato', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
