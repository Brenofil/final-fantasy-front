import { Component, Input, OnInit } from '@angular/core';
import { ItemModel } from './Item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() public items: ItemModel[];

  constructor() {}

  ngOnInit(): void {}
}
