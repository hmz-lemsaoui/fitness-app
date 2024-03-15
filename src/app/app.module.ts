import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthModule } from './auth/auth.module';
import { ProtienComponent } from './protien/protien.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GrowyhingComponent } from './growyhing/growyhing.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const materialComponents = [MatProgressSpinnerModule];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProgressSpinnerComponent,
    ProtienComponent,
    AboutComponent,
    ContactUsComponent,
    GrowyhingComponent,
    TestimonialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ...materialComponents,
    AuthModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
