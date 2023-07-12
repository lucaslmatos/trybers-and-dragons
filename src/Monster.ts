import { SimpleFighter } from './Fighter';

abstract class Monster implements SimpleFighter {
  _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints():number { return this._lifePoints; }
  get strength():number { return this._strength; }

  receiveDamage(attackPoints:number):number {
    if (attackPoints >= this._lifePoints) {
      this._lifePoints = -1;
    } else {
      this._lifePoints -= attackPoints;
    }
    return this._lifePoints;
  }

  attack(enemy:SimpleFighter):void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;