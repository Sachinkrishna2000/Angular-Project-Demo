import { Component, OnInit,} from '@angular/core';
import * as deals from "../prod.json";

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isVisible: boolean = false;
  hide_products() {
    this.isVisible = !this.isVisible;
  }
  
  all:any=(deals as any).default;

}
