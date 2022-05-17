import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from '../team/team.component';
import { HomeContentComponent } from './home-content/home-content.component';

const routes: Routes = [
  {path: '', component: HomeContentComponent},
  {path: 'team', component: TeamComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }