import { Tabs } from 'expo-router';

const _layout = () => {

  return (
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="red_tab" options={{ title: "Red Tab" }}></Tabs.Screen>
        <Tabs.Screen name="blue_tab" options={{ title: "Blue Tab" }}></Tabs.Screen>
        <Tabs.Screen name="green_tab" options={{ title: "Green Tab" }}></Tabs.Screen>
      </Tabs>

  );
};

export default _layout;

