import { Component } from '@angular/core';
import { RaregameModel } from '../app/components/raregames/Raregame.model';
import { ItemModel } from '../app/components/bazaar/item/Item.model';
import { RareGameService } from '../app/components/raregames/raregames.service';
import { BazaarService } from '../app/components/bazaar/bazaar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RareGameService],
})
export class AppComponent {
  // titles
  title = 'Final Fantasy XII: Clan Primer';
  shortTitle = 'FF-XII CP';
  // main variables
  bazaarItems: ItemModel[] = [];
  raregames: RaregameModel[] = [];
  page: string = 'home';

  async ngOnInit() {
    await this.ngFetchData();
  }

  async ngFetchData() {
    let rgService = new RareGameService();
    let bzService = new BazaarService();
    // fetching data
    this.bazaarItems = await bzService.fetchList();
    this.raregames = await rgService.fetchList();
  }
}
