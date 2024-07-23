import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects-card',
  standalone: true,
  imports: [],
  templateUrl: './projects-card.component.html',
  styleUrl: './projects-card.component.css'
})
export class ProjectsCardComponent {
  @Input() url!: String;
  @Input() title!: String;
  @Input() description!: String;
  @Input() date!: String;
}
