import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonGradientComponent } from "./button-gradient/button-gradient.component";
import { NavComponent } from "./nav/nav.component";
import { TeamCardComponent } from "./team-card/team-card.component";
import { TopComponent } from "./top/top.component";
import { WorkCardComponent } from "./work-card/work-card.component";

@NgModule({
  declarations: [
    WorkCardComponent, 
    NavComponent, 
    TopComponent, 
    ButtonGradientComponent,
    TeamCardComponent
  ],
  imports: [RouterModule, CommonModule],
  exports: [
    WorkCardComponent, 
    NavComponent, 
    TopComponent, 
    ButtonGradientComponent,
    TeamCardComponent
  ]
})
export class SharedModule {}