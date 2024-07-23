import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectsComponent } from '../../sections/projects/projects.component';
import { AchivementsComponent } from '../../sections/achivements/achivements.component';

@Component({
  selector: 'app-projects-and-achievments',
  standalone: true,
  imports: [CommonModule,ProjectsComponent, AchivementsComponent],
  templateUrl: './projects-and-achievments.component.html',
  styleUrl: './projects-and-achievments.component.css'
})
export class ProjectsAndAchievmentsComponent {
    activeTab :string = "achievements";
}
