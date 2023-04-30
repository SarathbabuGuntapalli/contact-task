import { createStore } from 'redux';
import { contactReducer } from './reducers/contacts'

export const store = createStore(contactReducer);
