import { Component, OnInit } from '@angular/core';
import { expand, flyInOut } from 'src/app/animations/animation';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
    '[@flyInOut]': 'true',
    style: 'display:block;',
  },
  animations: [flyInOut()],
})
export class HomeComponent implements OnInit {
  constructor(private orderdetailsservice: OrderdetailsService) {}
  pastryData: any;

  ngOnInit(): void {
    this.pastryData = this.orderdetailsservice.getDishes();
  }
}
