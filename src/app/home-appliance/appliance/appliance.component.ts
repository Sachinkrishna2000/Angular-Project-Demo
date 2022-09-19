import { Component, OnInit } from '@angular/core';
import * as appliance from "../home_appliance.json";

@Component({
  selector: 'app-appliance',
  templateUrl: './appliance.component.html',
  styleUrls: ['./appliance.component.css']
})
export class ApplianceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isVisible: boolean = true;
  hide_products() {
    this.isVisible = !this.isVisible;
  }
  
  all:any=(appliance as any).default;

}
