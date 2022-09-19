import { Component, OnInit } from '@angular/core';
import { Sport } from '../sport';
import { SportService } from '../sport.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor(private sportservice:SportService) { }
  sport: Sport[]=[]
  
  isVisible: boolean = false;
  hide_products() {
    this.isVisible = !this.isVisible;
  }

  ngOnInit(): void {
    const sportObservable= this.sportservice.getSportDetails();
    sportObservable.subscribe((sportData: Sport[])=>{
      this.sport=sportData;
    });
  }

}
