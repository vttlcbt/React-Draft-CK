import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { connect } from "react-redux"

const TestNavi = ({ navigation, state, setname }) => {
  console.log(state)
  return (
    <View style={styles.container}>
      <Text>TestNavi</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("Counter")
          setname("TestNavi")
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
})
