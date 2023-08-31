import { combineReducers } from 'redux';
import commonReducer from './commomReducer';
import DataReducer from './DataReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['colorrdata'],
};

const persistConfigdata = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['detailsStore'],
};

const rootReducers = combineReducers({
  commonReducer: persistReducer(persistConfig, commonReducer),
  DataReducer: persistReducer(persistConfigdata, DataReducer),
});

export default rootReducers;