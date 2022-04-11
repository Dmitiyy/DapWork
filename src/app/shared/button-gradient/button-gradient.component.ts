import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-button-gradient',
  templateUrl: './button-gradient.component.html',
  styleUrls: ['./button-gradient.component.sass']
})
export class ButtonGradientComponent {
  @Input('width') width!: number;
  @Input('height') height!: number;
  @Input('radius') radius!: number;
  @Input('title') title!: string;
}