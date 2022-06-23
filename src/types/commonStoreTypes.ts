import { rootReducer } from 'src/store';

type ReducersType = typeof rootReducer
export type AppState = ReturnType<ReducersType>
