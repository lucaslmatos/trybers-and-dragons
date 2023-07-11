import Race from './Race';

class Orc extends Race {
  _maxLifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.instances += 1;
  }
  
  static createdRacesInstances() { return this.instances; }
  get maxLifePoints():number { return this._maxLifePoints; }
}

export default Orc;