/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { elementType, shape } from 'prop-types';
// import Dexie from 'dexie';
import Store from '../components/Store';
// import { useEffectAsync } from '../hooks';
import '../styles/globals.css';

// const db = new Dexie('game');
// db.version(1).stores({
//   player: '++id,name,race,stats',
// });

function MyApp({ Component, pageProps }) {
  // useEffectAsync(async () => {
  //   await db.player.where('name').anyOf('Hero').delete();
  // }, []);
  return <Store {...pageProps}><Component {...pageProps} /></Store>;
}

MyApp.propTypes = {
  Component: elementType.isRequired,
  pageProps: shape({}).isRequired,
};

export default MyApp;
