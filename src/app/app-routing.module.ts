import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { isAuthGuard } from './auth/guards/is-auth.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [isAuthGuard],
    component: DashboardComponent,
  },
  {
    path: 'conatct-us',
    component: ContactUsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
