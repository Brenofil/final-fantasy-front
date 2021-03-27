import { Component, Input, OnInit } from "@angular/core";
import { BazaarService } from "./bazaar.service";
import { ItemModel } from "./item/Item.model";

@Component({
  selector: "app-bazaar",
  templateUrl: "bazaar.component.html",
})
export class BazaarComponent implements OnInit {
  public ctx;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;

  @Input() public itemList: ItemModel[] = [];

  constructor() {}

  async ngOnInit() {
    let service: BazaarService = new BazaarService();
    this.itemList = await service.fetchList();
  }

  public updateOptions() {}

  public onFilter(filter: string) {}
}
