import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.sass']
})
export class TeamCardComponent {
  constructor(private router: Router, private route: ActivatedRoute) {} 

  openTeam() {
    this.router.navigate(['team'], {relativeTo: this.route});
  }
};