import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RaregameModel } from './Raregame.model';
import { RareGameService } from './raregames.service';

@Component({
  selector: 'app-raregames',
  templateUrl: './raregames.component.html',
  styleUrls: ['./raregames.component.css'],
})
export class RaregamesComponent implements OnInit {
  @Input() public raregameList: RaregameModel[];

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    let rgService = new RareGameService();
    this.raregameList = await rgService.fetchList();
  }

  getStars(rank: number) {
    let stars = '';
    
    switch (rank) {
      case 1:
        stars = '★☆☆☆☆';
        break;
      case 2:
        stars = '★★☆☆☆';
        break;
      case 3:
        stars = '★★★☆☆';
        break;
      case 4:
        stars = '★★★★☆';
        break;
      case 5:
        stars = '★★★★★';
        break;
      default:
        stars = '☆☆☆☆☆';
        break;
    }

    return stars;
  }
}
