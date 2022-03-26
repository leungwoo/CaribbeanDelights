import { Component, OnInit } from '@angular/core';
import { expand, flyInOut } from 'src/app/animations/animation';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';
import { Pastry } from 'src/app/shared/pastry';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  host: { '[@flyInOut]': 'true', style: 'display:block;' },
  animations: [flyInOut(), expand()],
})
export class MenuComponent implements OnInit {
  public pastryData: Pastry[];

  constructor(private orderdetailsservice: OrderdetailsService) {
    this.pastryData = [];
  }

  ngOnInit(): void {
    this.pastryData = this.orderdetailsservice.getDishes();
  }
}
