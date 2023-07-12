import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _opponents: Array<SimpleFighter | Fighter>;
  
  constructor(player:Fighter, oponents: Array<SimpleFighter | Fighter>) {
    super(player);
    this._opponents = oponents;
  }

  fight(): number {
    this.player.attack(this._opponents[0]);
    if (this._opponents[0].lifePoints === -1) {
      this._opponents.splice(0, 1);
      if (this._opponents.length === 0) {
        return 1;
      }
    }

    this._opponents.forEach((opponent) => {
      opponent.attack(this.player);
      if (this.player.lifePoints === -1) {
        return -1;
      }
    });

    return this.continueFight();
  }

  continueFight(): number {
    return this.fight();
  }
}

export default PVE;