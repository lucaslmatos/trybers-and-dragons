import Race from './Race';

class Elf extends Race {
  _maxLifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.instances += 1;
  }
  
  static createdRacesInstances() { return this.instances; }
  get maxLifePoints():number { return this._maxLifePoints; }
}

export default Elf;