import React from 'react';
import { element } from 'prop-types';
import { StoreContext, useLocalState } from '../../hooks';
import { Goblin, Player } from '../../utils';
import { http } from '../../http';

const initialState = {};

const Store = ({ children }) => {
  const [context, setState] = useLocalState(initialState);
  const goblin = new Goblin({ gold: [500, 1200] });
  const hero = new Player();

  return (
    <StoreContext.Provider value={{
      ...context, hero, goblin, setState, http,
    }}
    >
      {children}
    </StoreContext.Provider>
  );
};

Store.propTypes = {
  children: element,
};

export default Store;
