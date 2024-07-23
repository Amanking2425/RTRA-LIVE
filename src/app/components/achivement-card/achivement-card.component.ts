import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-achivement-card',
  standalone: true,
  imports: [],
  templateUrl: './achivement-card.component.html',
  styleUrl: './achivement-card.component.css'
})
export class AchivementCardComponent {
  @Input() url!:String;
  @Input() title!:String;
  @Input() date!:String;
  @Input() description!:String;

}
