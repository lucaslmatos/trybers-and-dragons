import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _playerTwo: Fighter;
  
  constructor(player:Fighter, playerTwo: Fighter) {
    super(player);
    this._playerTwo = playerTwo;
  }

  fight(): number {
    this.player.attack(this._playerTwo);
    if (this._playerTwo.lifePoints === -1) { 
      return 1; 
    }
    this._playerTwo.attack(this.player);
    if (this.player.lifePoints === -1) { 
      return -1; 
    } 
    return this.continueFight();
  }
  
  continueFight(): number {
    return this.fight();
  }
}

export default PVP;