import { createStore } from 'redux';

import modalsReducer from './reducers/modalsReducer';

export const store = createStore(modalsReducer);
