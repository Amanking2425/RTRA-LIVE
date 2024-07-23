import { Component, Input } from '@angular/core';
import {Router,RouterLink} from '@angular/router';
interface CustomEvent {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    timings: string;
    category: string;
}

@Component({
    selector: 'app-event-card',
    standalone: true,
    imports: [],
    templateUrl: './event-card.component.html',
    styleUrl: './event-card.component.css',
})
export class EventCardComponent {
    @Input() event!: CustomEvent;
    constructor(private router: Router){}
    redirect() {
        console.log("function called");
        this.router.navigate([`../event-detail/${this.event.id}`], {queryParams:{eventDetail : this.event.id}})
       }
}
