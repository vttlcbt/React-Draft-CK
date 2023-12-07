import React from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { connect } from "react-redux"

const TestNavi = ({ navigation, state, setname }) => {
  console.log(state)
  const [text, setText] = React.useState("")
  return (
    <View style={styles.container}>
      <Text>TestNavi</Text>
      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.input}
      ></TextInput>
      <Pressable
        onPress={() => {
          navigation.navigate("Counter")
          setname(text)
        }}
        style={styles.btn}
      >
        Click
      </Pressable>
    </View>
  )
}

var mapStateToProps = (state) => {
  return { state: state.name }
}
var mapDispatchToProps = (dispatch) => ({
  setname: (text) => dispatch({ type: "SETNAME", payload: text }),
})
export default connect(mapStateToProps, mapDispatchToProps)(TestNavi)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFADAD",
    alignItems: "center",
    justifyContent: "center",
  },

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
})
