// ------------------------------------
// Constants
// ------------------------------------
export const CONSTANT = '<%= pascalEntityName %>.CONSTANT'

// ------------------------------------
// Actions
// ------------------------------------
export function action (payload) {
  return {
    payload,
    type: CONSTANT
  }
}

export const actions = {
  action
}

// ------------------------------------
// Action Handlers
// ------------------------------------
function actionHandler(state, action) {
  return state
}

const ACTION_HANDLERS = {
  [TYPE_CONSTANT]: actionHandler
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
