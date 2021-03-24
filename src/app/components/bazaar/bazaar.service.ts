import axios from 'axios';
import { ItemModel } from './item/Item.model';

export class BazaarService {
  private bazaarURL: string = 'http://localhost:3000/items';

  private bazaarList: ItemModel[] = [];

  async fetchList() {
    await axios
      .get(this.bazaarURL)
      .then((response) => {
        for (let item of response.data) {
          this.bazaarList.push(
            new ItemModel(item.name, item.content, item.required, item.price)
          );
        }
      })
      .catch((error) => {
        console.log('Error: ' + error);
      });

    return this.bazaarList;
  }

  async fetchAlphabetical() {
      
  }

}
