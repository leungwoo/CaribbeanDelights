import { Injectable } from '@angular/core';
import { pastryDetails } from '../shared/pastries';
import { Pastry } from '../shared/pastry';

@Injectable({
  providedIn: 'root',
})
export class OrderdetailsService {
  constructor() {}
  getDishes(): Pastry[] {
    return pastryDetails;
  }

  getDish(id: string): Pastry {
    return pastryDetails.filter((dish) => dish.id === id)[0];
  }
}
