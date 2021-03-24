import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BazaarService } from './bazaar.service';
import { ItemModel } from './item/Item.model';

@Component({
  selector: 'app-bazaar',
  templateUrl: './bazaar.component.html',
  styleUrls: ['./bazaar.component.css']
})
export class BazaarComponent implements OnInit {

  @Input() public itemList: ItemModel[] = [];
  
  constructor(private route: ActivatedRoute) { }

  async ngOnInit() {
    let bzService = new BazaarService();
    this.itemList = await bzService.fetchList();
  }

}
