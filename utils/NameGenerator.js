import { rng } from './rng';

const goblinName1 = ['Ba', 'Bax', 'Dan', 'Fi', 'Fix', 'Fiz', 'Gi', 'Gix', 'Giz', 'Gri', 'Gree', 'Greex', 'Grex', 'Ja', 'Jax', 'Jaz', 'Jex', 'Ji', 'Jix', 'Ka', 'Kax', 'Kay', 'Kaz', 'Ki', 'Kix', 'Kiz', 'Klee', 'Kleex', 'Kwee', 'Kweex', 'Kwi', 'Kwix', 'Kwy', 'Ma', 'Max', 'Ni', 'Nix', 'No', 'Nox', 'Qi', 'Rez', 'Ri', 'Ril', 'Rix', 'Riz', 'Ro', 'Rox', 'So', 'Sox', 'Vish', 'Wi', 'Wix', 'Wiz', 'Za', 'Zax', 'Ze', 'Zee', 'Zeex', 'Zex', 'Zi', 'Zix', 'Zot'];
const goblinName2 = ['b', 'ba', 'be', 'bi', 'd', 'da', 'de', 'di', 'e', 'eb', 'ed', 'eg', 'ek', 'em', 'en', 'eq', 'ev', 'ez', 'g', 'ga', 'ge', 'gi', 'ib', 'id', 'ig', 'ik', 'im', 'in', 'iq', 'iv', 'iz', 'k', 'ka', 'ke', 'ki', 'm', 'ma', 'me', 'mi', 'n', 'na', 'ni', 'q', 'qa', 'qe', 'qi', 'v', 'va', 've', 'vi', 'z', 'za', 'ze', 'zi', '', '', '', '', '', '', '', '', '', '', '', '', ''];
const goblinName3 = ['ald', 'ard', 'art', 'az', 'azy', 'bit', 'bles', 'eek', 'eka', 'et', 'ex', 'ez', 'gaz', 'geez', 'get', 'giez', 'iek', 'igle', 'ik', 'il', 'in', 'ink', 'inkle', 'it', 'ix', 'ixle', 'lax', 'le', 'lee', 'les', 'lex', 'lyx', 'max', 'maz', 'mex', 'mez', 'mix', 'miz', 'mo', 'old', 'rax', 'raz', 'reez', 'rex', 'riez', 'tee', 'teex', 'teez', 'to', 'uek', 'x', 'xaz', 'xeez', 'xik', 'xink', 'xiz', 'xonk', 'yx', 'zeel', 'zil'];
const goblinLastName1 = ['Bolt', 'Boom', 'Bot', 'Cog', 'Copper', 'Damp', 'Dead', 'Far', 'Fast', 'Fiz', 'Fizz', 'Fizzle', 'Fuse', 'Gear', 'Giga', 'Gold', 'Grapple', 'Grease', 'Greasy', 'Ground', 'Haggle', 'Hard', 'Knee', 'Leaf', 'Loose', 'Man', 'Mega', 'Money', 'Mud', 'Multi', 'Peddle', 'Pepper', 'Pick', 'Rocket', 'Rust', 'Salt', 'Salty', 'Sand', 'Scroll', 'Shadow', 'Sharp', 'Silver', 'Spark', 'Steam', 'Top', 'Wrench'];
const goblinLastName2 = ['basher', 'blade', 'blast', 'blaster', 'bolt', 'bomb', 'boot', 'bottom', 'bub', 'button', 'buttons', 'cash', 'clamp', 'digger', 'feet', 'fingers', 'flare', 'fuel', 'fuse', 'gear', 'gleam', 'gob', 'grinder', 'grubber', 'hallow', 'hammer', 'head', 'knob', 'mine', 'nose', 'nozzle', 'pinch', 'pocket', 'pot', 'racket', 'rocket', 'screw', 'shatter', 'shiv', 'skimmer', 'snap', 'snipe', 'spark', 'sprocket', 'task', 'tongue', 'tooth', 'tweak', 'twister', 'volt', 'watts', 'well', 'wick', 'wizzle', 'wrench'];

const randomInArray = (arr) => arr[rng(0, arr.length)];

export const randomGoblinName = () => {
  console.log('rng(0!?', rng(0, 2));
  const firstGoblinName = `${randomInArray(goblinName1)}${randomInArray(goblinName2)}${randomInArray(goblinName3)}`;
  const lastGoblinName = `${randomInArray(goblinLastName1)}${randomInArray(goblinLastName2)}`;
  return `${firstGoblinName} ${lastGoblinName}`;
};
