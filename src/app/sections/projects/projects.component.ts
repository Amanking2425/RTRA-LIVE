import { Component } from '@angular/core';
import { ProjectsCardComponent } from "../../components/projects-card/projects-card.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectsCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
