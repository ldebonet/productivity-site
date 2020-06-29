import { AppRegistry } from "react-native";
import App from "../static/App";

console.log("Testing!")

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});

