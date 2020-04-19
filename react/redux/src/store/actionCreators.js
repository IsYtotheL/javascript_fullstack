import { CHANGE_INPUT_VALUE,INIT_LIST_ACTION } from "./actionTypes"

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})