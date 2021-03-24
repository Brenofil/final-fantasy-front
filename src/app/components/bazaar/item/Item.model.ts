export class ItemModel {
  public name: string;
  public content: string[];
  public required: string[];
  public price: number;

  constructor(
    name: string,
    content: string[],
    required: string[],
    price: number
  ) {
    this.name = name;
    this.content = content;
    this.required = required;
    this.price = price;
  }
}
