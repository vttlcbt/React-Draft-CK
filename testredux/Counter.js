import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import React, { useEffect } from "react"
import { connect } from "react-redux"
import { decrement, increment } from "./Actions"

function Counter({ add, remove, update, state }) {
  const [text, setText] = React.useState("")
  const [isClck, setIsClck] = React.useState(false)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   setInterval(() => {
  //     alert("xxxxxxxxxx")
  //   }, 1000)
  //   return () => {
  //     clearInterval()
  //   }
  // }, [isClck === true])

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await response.json()
    console.log(data)
  }

  const handleAdd = () => {
    add(text)
  }

  useEffect(() => {
    getData()
  }, [handleAdd])

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.input}
      ></TextInput>
      <Pressable style={styles.btn} onPress={handleAdd}>
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
          <Text>{item.text}</Text>
          <Pressable
            onPress={() => {
              remove(item.id)
              getData()
            }}
          >
            <Text>X</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              update({ id: item.id, text: text })
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
  return { state: state.todos }
}
var mapDispatchToProps = (dispatch) => ({
  add: (text) => dispatch({ type: "add", payload: text }),
  remove: (number) => dispatch({ type: "remove", payload: number }),
  update: (obj) =>
    dispatch({ type: "update", payload: { id: obj.id, text: obj.text } }),
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
