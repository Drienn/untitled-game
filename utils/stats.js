/* eslint-disable max-classes-per-file */
import { rng } from './rng';
import { randomGoblinName } from './NameGenerator';

export class Stats {
  constructor(props = {}) {
    const {
      str = 0, dex = 0, con: conBonus = 0, wis = 0, int = 0, cha = 0,
    } = props;

    const con = rng(14, 18) + conBonus;

    this.maxHp = con * 10;
    this.hp = con * 10;

    this.stats = {
      str: rng(14, 18) + str,
      dex: rng(14, 18) + dex,
      con,
      wis: rng(14, 18) + wis,
      int: rng(14, 18) + int,
      cha: rng(14, 18) + cha,
    };
  }
}

export class Loot extends Stats {
  constructor(props) {
    super(props);
    const { gold = [0, 255] } = props;
    const [min, max] = gold;

    this.gold = rng(min, max);
  }
}

export class Monster extends Loot {
  constructor(props) {
    super(props);

    this.takeDamage = this.takeDamage.bind(this);
  }

  takeDamage = (dmg) => {
    if (this.hp - dmg < 0) {
      this.hp = 0;
      return null;
    }
    this.hp -= dmg;
    return null;
  }
}

export class Goblin extends Monster {
  constructor(props) {
    super({ ...props, dex: 2 });

    this.name = randomGoblinName();
  }
}
