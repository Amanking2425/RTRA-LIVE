import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventCardComponent } from '../../components/event-card/event-card.component';

import {
    Firestore,
    collection,
    where,
    getDocs,
    query,
} from '@angular/fire/firestore';

interface Tabs{
    upcoming:boolean;
    past:boolean

}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule,EventCardComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
    activeTab :boolean = false;// true->upcoming ; false->past
    constructor(private firestore: Firestore) {}
    eventsCollection = collection(this.firestore, 'events');
    UpcomingEvents: any[] = [];
    PastEvents: any[] = [];

    async ngOnInit() {
        const eventsQuery = query(this.eventsCollection, where('category', '==', 'upcoming'));
        const querySnapshot = await getDocs(eventsQuery);
        querySnapshot.forEach((doc) => {
            this.UpcomingEvents.push(doc.data());
        });
        const eventsQueryPast = query(this.eventsCollection, where('category', '==', 'past'));
        const querySnapshotPast = await getDocs(eventsQueryPast);
        querySnapshotPast.forEach((doc) => {
            this.PastEvents.push(doc.data());
        });
    }
};
