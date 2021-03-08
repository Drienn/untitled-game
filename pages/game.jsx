import React, { useState } from 'react';
import { useStore } from '../hooks';
import { http } from '../http';
import { rng } from '../utils';
import styles from './game.module.scss';

function Game({ player }) {
  const { goblin, hero } = useStore();
  const [hits, setHits] = useState([]);

  console.log('got the  player!', player);

  function doDamage() {
    const dmg = rng(85, 140);
    setHits([...hits, dmg]);
    goblin.takeDamage(dmg);
    if (goblin.hp <= 0) {
      hero.gainEXP(100);
    }
  }

  if (!goblin.name) return null;

  return (
    <div>
      <h1 className={styles.thingy}>{player.name}</h1>
      <h1>Level: {hero.level}</h1>
      <h1>Exp: {hero.currentXP}</h1>
      <h1>You&apos;ve encountered {goblin.name}!</h1>
      <p>HP left: {goblin.hp || 'You\'ve killed the goblin!'}</p>
      <button type="button" onClick={doDamage}>Hit Golbin!</button>
      { hits.length > 0
        && hits.map((dmg, i) => <p key={`${dmg}-${i * 1}`}>Hit {goblin.name} for {dmg}</p>)}
    </div>
  );
}

export async function getStaticProps() {
  const [player] = await http.get('/hello/1');
  console.log('the player!', player);
  // const goblin = new Goblin({ gold: [500, 1200] });
  // console.log('got the gobliN!', goblin);
  // return { props: { monster: JSON.stringify(goblin) } }
  return { props: { player } };
}

export default Game;
