import { Text, View } from "react-native";
import "./global.css";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background-primary">
      <Text className="text-5xl text-center font-bold text-primary-500 font-PTSans-BoldItalic">
      Welcome to Special Skills
      </Text>
      <Text className="text-lg text-center text-text-secondary font-pt-sans mt-4">
        Show them what you got!
      </Text>
    </View>
  );
}