export class RaregameModel {
  public number: number;
  public name: String;
  public rank: number;
  public location: String;
  public condition: String;

  constructor(
    number: number,
    name: string,
    rank: number,
    location: string,
    condition: string
  ) {
    this.number = number;
    this.name = name;
    this.rank = rank;
    this.location = location;
    this.condition = condition;
  }
}
