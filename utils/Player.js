import { Stats } from './stats';

export class Player extends Stats {
  constructor(props) {
    super(props);
    this.name = 'Player Name';
    this.level = 1;
    this.currentXP = 0;

    this.getNextLevelExp = this.getNextLevelExp.bind(this);
    this.gainEXP = this.gainEXP.bind(this);
    this.xpNeeded = this.xpNeeded.bind(this);
  }

  getNextLevelExp() {
    return (this.level * 100) * this.level;
  }

  xpNeeded = () => this.getNextLevelExp() - this.currentXP;

  gainEXP(xp) {
    this.currentXP += xp;
    if (this.xpNeeded() <= 0) {
      this.level += 1;
    }
  }
}
