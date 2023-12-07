var initialState = {
  todos: [
    { id: 1, text: "text 1" },
    { id: 2, text: "text 2" },
    { id: 3, text: "text 3" },
  ],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: state.todos.length + 1, text: action.payload },
        ],
      }
    // [...state, { id: state.length + 1, text: action.payload }]
    case "remove":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      }
    //[...state, state.filter((item) => item.id !== action.payload)]
    case "update":
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, text: action.payload.text }
            : item
        ),
      }
    // [...state, state.map((item) => item.id === action.payload.id ? { ...item, text: action.payload.text } : item)]
    default:
      return state
  }
}
export default reducer
