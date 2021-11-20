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
import { IntroComponent } from './components/intro/intro.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { UsersService } from './be-connection/services/users.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

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
    ContactUsComponent,
    IntroComponent,
    WhyUsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [HttpClient, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
