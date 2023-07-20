function heroes() {
  const fighter = function (name) {
    let state = {
      name,
      health: 100,
      stamina: 100,
    };

    let fighterObj = Object.assign(state, canFight(state));
    return fighterObj;
  };

  const canFight = (stateObj) => ({
    fight: () => {
      console.log(`${stateObj.name} slashes at the foe!`);
      stateObj.stamina--;
    },
  });

  const mage = function (name) {
    let state = {
      name,
      health: 100,
      mana: 100,
    };

    let mageObj = Object.assign(state, canCast(state)); //Object.assign(taegrt, source) takes target and adds source to it.
    return mageObj;
  };

  const canCast = (state) => ({
    cast: (spell) => {
      console.log(`${state.name} cast ${spell}`);
      state.mana--;
    },
  });

  return { mage: mage, fighter: fighter }; //returns object of heroes objects or simply look at it as assoc arr of sorts
}

let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
