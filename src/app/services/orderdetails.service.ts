import { Injectable } from '@angular/core';
import { Pastry } from '../shared/pastry';

@Injectable({
  providedIn: 'root',
})
export class OrderdetailsService {
  constructor() {}

  pastryDetails: Pastry[] = [
    {
      id: '1',
      foodName: 'Chocolate Chip Cookies',
      foodDetails: 'Natural healthy organic ingredients',
      foodPrice: '10',
      foodImg: '/assets/images/cookies.jpeg',
    },
    {
      id: '2',
      foodName: 'Sausage Roll',
      foodDetails: 'Sausage and organic flour',
      foodPrice: '5',
      foodImg: '/assets/images/sausageroll.jpeg',
    },
    {
      id: '3',
      foodName: 'Banana Bread',
      foodDetails: 'Banana with Nuts and Organic flour',
      foodPrice: '20',
      foodImg: '/assets/images/bananabread.jpeg',
    },
    {
      id: '4',
      foodName: 'Croissant',
      foodDetails: 'Natural healthy organic ingredients',
      foodPrice: '15',
      foodImg: '/assets/images/croissant.jpeg',
    },
    {
      id: '5',
      foodName: 'Jamaican patty',
      foodDetails: 'Jamaican beef and corn meal',
      foodPrice: '30',
      foodImg: '/assets/images/jamaicanpatty.jpeg',
    },
    {
      id: '6',
      foodName: 'Lunch special',
      foodDetails: 'Caribbean Blend',
      foodPrice: '50',
      foodImg: '/assets/images/lunch.jpeg',
    },
  ];
}
