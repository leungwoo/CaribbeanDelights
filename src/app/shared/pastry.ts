export class Pastry {
  public id: string;
  public foodName: string;
  public foodDetails: string;
  public foodPrice: string;
  public foodImg: string;

  constructor(
    _id: string,
    _foodName: string,
    _foodDetails: string,
    _foodPrice: string,
    _foodImg: string
  ) {
    this.id = _id;
    this.foodName = _foodName;
    this.foodDetails = _foodDetails;
    this.foodPrice = _foodPrice;
    this.foodImg = _foodImg;
  }
}
