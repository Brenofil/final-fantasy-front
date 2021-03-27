import { Component, Input, OnInit } from "@angular/core";
import { RaregameModel } from "./raregame/Raregame.model";
import { RareGameService } from "./raregames.service";

@Component({
  selector: "app-raregames",
  templateUrl: "raregames.component.html",
})
export class RaregamesComponent implements OnInit {
  public ctx;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;

  @Input() public raregameList: RaregameModel[] = [];

  constructor() {}

  async ngOnInit() {
    let service: RareGameService = new RareGameService();
    this.raregameList = await service.fetchList();
  }

  public updateOptions(type: string) {}

  public onFilter(filter: string){
    
  }
}
