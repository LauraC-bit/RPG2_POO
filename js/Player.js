class Player {
  constructor(name) {
    this._name = name;
    // this._character = character;
  }
  get name() {
    return this._name;
  }
  set name(in_name) {
    this._name = in_name;
  }

  get character() {
    return this._character;
  }
  set character(in_character) {
    this._character = in_character;
  }
}

export default Player;
