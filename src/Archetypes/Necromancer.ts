import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  _energyType: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name, 0, 0);
    this._energyType = 'mana';
    Necromancer.instances += 1;
  }
  
  static createdArchetypeInstances():number { return this.instances; }
  get energyType():EnergyType { return this._energyType; }
}

export default Necromancer;