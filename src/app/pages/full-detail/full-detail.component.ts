import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsData } from '../../data/EventsData';

@Component({
  selector: 'app-full-detail',
  standalone: true,
  imports: [],
  templateUrl: './full-detail.component.html',
  styleUrl: './full-detail.component.css'
})
export class FullDetailComponent implements OnInit{
  constructor(
    private route: ActivatedRoute
  ) {}

  id: number | 0 = 0;
  data:any;
  ngOnInit() {
    this.id = parseInt(this.route.snapshot.queryParamMap.get('eventDetail') || '0', 10);
    this.data = EventsData[this.id];
  }
}  

