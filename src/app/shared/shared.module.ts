import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';

const exportedComponenets = [
  TopBarComponent,
  FooterComponent,
];

const materialComponents = [MatToolbarModule, MatIconModule];

@NgModule({
  declarations: [...exportedComponenets],
  imports: [CommonModule, ...materialComponents],
  exports: [...exportedComponenets],
})
export class SharedModule {}
