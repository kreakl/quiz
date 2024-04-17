declare global {
  /**
   * ⚠️ FSD
   *
   * Its hack way to export redux infering types from @/app
   * and use it in @/shared/model/hooks.ts
   */

  declare type RootState = import('../src/app/redux/app-store').RootState;
  declare type AppDispatch = import('../src/app/redux/app-store').AppDispatch;
  declare type AppThunk = import('../src/app/redux/app-store').AppThunk;
}

export {};
