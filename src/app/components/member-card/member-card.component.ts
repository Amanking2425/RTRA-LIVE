import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css'
})
export class MemberCardComponent {
  @Input() name!:String;
  @Input() Position!:String;
  @Input() imageUrl!: String;
  @Input() url!: String;
}
