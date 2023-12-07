var initalState = {
  name: "",
  todoList: [],
}

function reducer(state = initalState, action) {
  switch (action.type) {
    case "SETNAME":
      return {
        ...state,
        name: action.payload,
      }
    case "INIT":
      return {
        ...state,
        todoList: action.payload,
      }
    case "ADD":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: state.todoList.length + 1,
            title: action.payload,
          },
        ],
      }
    case "REMOVE":
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      }
    case "UPDATE":
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === action.payload.id
            ? { ...item, title: action.payload.title }
            : item
        ),
      }
    default:
      return state
  }
}

export default reducer
