import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import showDeleteTodosModalReducer from '@/features/modal/showDeleteTodosModalSlice'
import modalTypeReducer from '@/features/modal/modalTypeSlice'
import todosReducer from '@/features/todos/todosSlice'
import newTodoInputReducer from '@/features/todos/newTodoInputSlice'

// Configure redux-persist with AsyncStorage
const persistConfig = {
  key: 'root', // The key to use when storing the state
  storage: AsyncStorage, // AsyncStorage is the storage engine
  whitelist: ['todos'], // Only persist the todos slice
}

// Combine all reducers
const rootReducer = combineReducers({
  showDeleteTodosModal: showDeleteTodosModalReducer,
  modalType: modalTypeReducer,
  todos: todosReducer,
  newTodoInput: newTodoInputReducer,
})

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Create a Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

// Create a persisted store
export const persistor = persistStore(store)
