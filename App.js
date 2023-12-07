import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { Provider } from "react-redux"
import Counter from "./testRedux01/Counter"
import store from "./testRedux01/Store"
import TestNavi from "./testRedux01/TestNavi"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const stack = createNativeStackNavigator()

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <TestNavi />
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="TestNavi" component={TestNavi} />
          <stack.Screen name="Counter" component={Counter} />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
