import { Tabs } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const _layout = () => {

  return (
    <>
      <Tabs screenOptions={{headerShown: false}}>
        <Tabs.Screen name="one" options={{
            title: 'one',
            tabBarIcon: ({color, focused}) => {
            return focused ? <FontAwesome6 name="1" size={24} color="green" />
            : <FontAwesome6 name="1" size={24} color="black" />}
        }}/>
        <Tabs.Screen name="two" options={{
            title: 'two',
            tabBarIcon: ({color, focused}) => {return focused ? <FontAwesome6 name="2" size={24} color="green" /> : <FontAwesome6 name="2" size={24} color="black" />}
        }}/>
        <Tabs.Screen name="three" options={{
            title: 'three',
            tabBarIcon: ({color, focused}) => {return focused ? <FontAwesome6 name="3" size={24} color="green" /> : <FontAwesome6 name="3" size={24} color="black" />}
        }}/>
        <Tabs.Screen name="four" options={{
            title: 'four',
            tabBarIcon: ({color, focused}) => {return focused ? <FontAwesome6 name="4" size={24} color="green" /> : <FontAwesome6 name="4" size={24} color="black" />}

        }}/>
      </Tabs>
      </>
  );
};

export default _layout;

