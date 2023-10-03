import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPrComponent } from './sprincipal/components/shared/header-pr/header-pr.component';
import { NavPrComponent } from './sprincipal/components/shared/nav-pr/nav-pr.component';
import { CarouselPrComponent } from './sprincipal/components/shared/carousel-pr/carousel-pr.component';
import { FooterPrComponent } from './sprincipal/components/shared/footer-pr/footer-pr.component';
import { IndicatorPrComponent } from './sprincipal/components/shared/indicator-pr/indicator-pr.component';
import { TestimonialsClientsPrComponent } from './sprincipal/components/shared/testimonials-clients-pr/testimonials-clients-pr.component';
import { ContactComponent } from './sprincipal/components/pages/contact/contact.component';
import { HomeComponent } from './sprincipal/components/pages/home/home.component';
import { AboutComponent } from './sprincipal/components/pages/about/about.component';
import { TeamComponent } from './sprincipal/components/pages/team/team.component';
import { PromotionComponent } from './sprincipal/components/pages/promotion/promotion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPrComponent,
    NavPrComponent,
    CarouselPrComponent,
    FooterPrComponent,
    IndicatorPrComponent,
    TestimonialsClientsPrComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent,
    PromotionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
