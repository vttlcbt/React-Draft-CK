import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import React from "react"
import { connect } from "react-redux"

function Counter({ add, remove, update, init, state, name }) {
  const [text, setText] = React.useState("")

  React.useEffect(() => {
    fetch("https://65488984dd8ebcd4ab230c44.mockapi.io/Todos")
      .then((response) => response.json())
      .then((data) => {
        init(data)
      })
  }, [])

  const postTodo = (obj) => {
    fetch("https://65488984dd8ebcd4ab230c44.mockapi.io/Todos", {
      method: "POST",
      body: JSON.stringify({ title: obj }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        add(data.title)
        console.log(data)
      })
  }

  const deleteTodo = (id) => {
    fetch(`https://65488984dd8ebcd4ab230c44.mockapi.io/Todos/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        remove(data.id)
        console.log(data)
      })
  }

  const updateTodo = (obj) => {
    fetch("https://65488984dd8ebcd4ab230c44.mockapi.io/Todos/" + obj.id, {
      method: "PUT",
      body: JSON.stringify({ title: obj.title }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        update(data)
        console.log(data)
      })
  }

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.input}
      ></TextInput>
      <Pressable
        style={styles.btn}
        onPress={() => {
          postTodo(text)
        }}
      >
        Add
      </Pressable>
      {state.map((item) => (
        <View
          key={item.id}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <Text>{item.title}</Text>
          <Pressable
            onPress={() => {
              deleteTodo(item.id)
            }}
          >
            <Text>X</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              updateTodo({
                id: item.id,
                title: text,
              })
            }}
          >
            <Text>Update</Text>
          </Pressable>
        </View>
      ))}
    </View>
  )
}
var mapStateToProps = (state) => {
  return { state: state.todoList, name: state.name }
}
var mapDispatchToProps = (dispatch) => ({
  add: (text) => dispatch({ type: "ADD", payload: text }),
  init: (obj) => dispatch({ type: "INIT", payload: obj }),
  remove: (number) => dispatch({ type: "REMOVE", payload: number }),
  update: (obj) =>
    dispatch({ type: "UPDATE", payload: { id: obj.id, title: obj.title } }),
})
export default connect(mapStateToProps, mapDispatchToProps)(Counter)

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#ffffff",
    width: 80,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: "90%",
    borderWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#C2FFD4",
    alignItems: "center",
    justifyContent: "center",
  },
})
