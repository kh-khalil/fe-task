import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TeamComponent } from './components/team/team.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    PortfolioComponent,
    TestimonialComponent,
    TeamComponent,
    OurClientsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
