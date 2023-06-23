class Character {
  constructor(atk, int, spd, agi, color) {
    this._hp = 100;
    this._atk = atk;
    this._int = int;
    this._spd = spd;
    this._agi = agi;
    this._color = color;
  }
  get hp() {
    return this._hp;
  }
  set hp(in_hp) {
    this._hp = in_hp;
  }

  get atk() {
    return this._atk;
  }
  set atk(in_atk) {
    this._atk = in_atk;
  }

  get int() {
    return this._int;
  }
  set int(in_int) {
    this._int = in_int;
  }

  get spd() {
    return this._spd;
  }
  set spd(in_spd) {
    this._spd = in_spd;
  }

  get agi() {
    return this._agi;
  }
  set agi(in_agi) {
    this._agi = in_agi;
  }

  get color() {
    return this._color;
  }
  set color(in_color) {
    this._color = in_color;
  }

  attack(atk, speed, int) {
    let result = atk / 2;
    result = result * speed;
    result = result / 100;
    result = result + int / 10;
  }

  dodge(agi) {
    let nbr = Math.floor(Math.random() * 100);
    if (nbr < agi) {
      return "true";
    } else {
      return false;
    }
  }
}

export default Character;
