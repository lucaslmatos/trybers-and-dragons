import Race from './Race';

class Dwarf extends Race {
  _maxLifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.instances += 1;
  }
  
  static createdRacesInstances() { return this.instances; }
  get maxLifePoints():number { return this._maxLifePoints; }
}

export default Dwarf;