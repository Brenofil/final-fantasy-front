import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { BazaarService } from "./bazaar.service";
import { ItemModel } from "./item/Item.model";
@Component({
  selector: "app-bazaar",
  templateUrl: "bazaar.component.html",
})
export class BazaarComponent implements OnInit {
  public ctx;
  public currentView: string = "TABLE";
  private filter: any;
  public rows: any;

  // datatable columns
  displayedColumns: string[] = ["Name", "Content", "Required", "Price"];
  @Input() public itemList: ItemModel[] = [];
  @ViewChild("bazaarTable") table: any;

  expanded: any = {};
  timeout: any;

  constructor() {}

  async ngOnInit() {
    let service: BazaarService = new BazaarService();
    this.itemList = await service.fetchList(this.filter);
    //console.log("Koe data: ", this.itemList);
    this.rows = this.formatDataForTable(this.itemList);
  }

  private formatDataForTable(itemList: ItemModel[]) {
    let result = [];
    let formatedItem = {
      name: "",
      content: "",
      required: "",
      price: 0,
    };
    // populating with formated values
    itemList.forEach((item) => {
      // item name
      formatedItem.name = item.name;
      // for each content item
      let content = item.content.reduce(
        (a: string, b: string) => a.concat(b, ", "),
        " "
      );
      formatedItem.content = content.trimEnd().replace(/.$/, ".");
      // for each required item
      let required = item.required.reduce(
        (a: string, b: string) => a.concat(b, ", "),
        " "
      );
      formatedItem.required = required.trimEnd().replace(/.$/, ".");
      // item price
      formatedItem.price = item.price;
      // pushing object to result
      result.push(formatedItem);
      // reseting object
      formatedItem = {
        name: "",
        content: "",
        required: "",
        price: 0,
      };
    });
    return result;
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log("paged!", event);
    }, 100);
  }

  toggleExpandRow(row) {
    console.log("Toggled Expand Row!", row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log("Detail Toggled", event);
  }

  updateView(view: string) {
    this.currentView = view;
  }

  public onFilter(filter: string) {}
}
