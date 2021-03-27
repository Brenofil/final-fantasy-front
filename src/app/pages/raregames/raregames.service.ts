import axios from "axios";
import { RaregameModel } from "./raregame/Raregame.model";

export class RareGameService {
  private raregameURL: string = "http://localhost:3000/raregames";

  private raregameList: RaregameModel[] = [];

  async fetchList() {
    await axios
      .get(this.raregameURL)
      .then((response) => {
        for (let raregame of response.data) {
          this.raregameList.push(
            new RaregameModel(
              raregame.number,
              raregame.name,
              raregame.rank,
              raregame.location,
              raregame.condition
            )
          );
        }
      })
      .catch((error) => {
        console.log("Error: " + error);
      });

    return this.raregameList;
  }
}
