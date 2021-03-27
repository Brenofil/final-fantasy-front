import { Component, Input, OnInit } from '@angular/core';
import { ItemModel } from './Item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
  @Input() public item: ItemModel;

  constructor() {}

  ngOnInit(): void {}
}
