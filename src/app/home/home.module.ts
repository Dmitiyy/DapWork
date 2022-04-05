import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { HomeTopComponent } from './home-top/home-top.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeNavComponent,
    HomeTopComponent,
    HomeContentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
