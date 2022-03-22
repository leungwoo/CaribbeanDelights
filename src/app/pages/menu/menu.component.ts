import { Component, OnInit } from '@angular/core';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private service: OrderdetailsService) {}
  pastryData: any;
  ngOnInit(): void {
    this.pastryData = this.service.pastryDetails;
  }
}
