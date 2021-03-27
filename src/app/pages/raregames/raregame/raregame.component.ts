import { Component, OnInit, Input } from "@angular/core";
import { RaregameModel } from "./Raregame.model";

@Component({
  selector: "app-raregame",
  templateUrl: "./raregame.component.html",
})
export class RaregameComponent implements OnInit {
  @Input() public raregame: RaregameModel;

  constructor() {}

  ngOnInit(): void {}

  getStars(rank: number) {
    let stars = "";

    switch (rank) {
      case 1:
        stars = "★☆☆☆☆";
        break;
      case 2:
        stars = "★★☆☆☆";
        break;
      case 3:
        stars = "★★★☆☆";
        break;
      case 4:
        stars = "★★★★☆";
        break;
      case 5:
        stars = "★★★★★";
        break;
      default:
        stars = "☆☆☆☆☆";
        break;
    }

    return stars;
  }

}
