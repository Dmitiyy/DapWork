import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { HomeTopComponent } from './home-top/home-top.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeNavComponent,
    HomeTopComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
