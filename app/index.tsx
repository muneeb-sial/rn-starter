import { Button } from "@/src/components/ui/button";
import { Text } from "@/src/components/ui/text";
import { View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Button className="w-full bg-black active:bg-black active:scale-90 transition-all duration-75">
        <Text className="text-white">
          Click me!
        </Text>
      </Button>
    </View>
  );
}