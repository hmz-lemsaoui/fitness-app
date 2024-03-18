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
import { ProductsComponent } from './products/products.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddProductComponent } from './products/add-product/add-product.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

const materialComponents = [
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
];
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
    ProductsComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ...materialComponents,
    AuthModule,
    ReactiveFormsModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
