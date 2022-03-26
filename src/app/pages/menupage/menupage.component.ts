import { Component, OnInit } from '@angular/core';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';
import { Pastry } from 'src/app/shared/pastry';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css'],
})
export class MenupageComponent implements OnInit {
  public dish?: Pastry;
  constructor(
    private orderdetailsservice: OrderdetailsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  //retrieve dish from service and route to menupage with individual item
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.dish = this.orderdetailsservice.getDish(id);
    console.log(this.dish);
  }
  //back method to return to menu page using location class
  goBack(): void {
    this.location.back();
  }
}
