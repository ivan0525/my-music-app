export interface IStoreState {
  [key: string]: any
}

export interface IAction {
  type: string
  data: any
}
