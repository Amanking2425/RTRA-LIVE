import { Component } from '@angular/core';
import { EventCardComponent } from "../../components/event-card/event-card.component";
import { AchivementCardComponent } from "../../components/achivement-card/achivement-card.component";

@Component({
  selector: 'app-achivements',
  standalone: true,
  imports: [EventCardComponent, AchivementCardComponent],
  templateUrl: './achivements.component.html',
  styleUrl: './achivements.component.css'
})
export class AchivementsComponent {

}
