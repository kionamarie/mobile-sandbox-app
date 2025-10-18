import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native'
import {useEffect, useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Slider from "@react-native-community/slider";
import ThemedView from '../components/ThemedView';


// App to count how many times user presses a button
const showAlert = () => 
    Alert.alert(
        'Limit Reached', 'You have reached the limit.',
        [
            {text: 'OK'},
        ],
        { cancelable: true, }
    );

const eighth = () => {
  const [count, setCount] = useState(0);
  const [countdown, setCountdown] = useState(false);
  const [limit, setLimit] = useState('');

  const updateCount = (newCount) => {
    setCount(newCount);
    if (newCount === limit) {
        setCountdown(true);
        Alert.alert(
        'Limit Reached', 'You have reached the limit.',
        [
            {text: 'OK'},
        ],
        { cancelable: true, }
    );
    } else {
        setCountdown(false);
    }
  };

  const updateLimit = (newLimit) => {
    setLimit(newLimit);
  };

  // Load count from Async storage
  useEffect(() => {
    const loadCount = async() => {
        try {
            const storedCount = await AsyncStorage.getItem('count');
            if (storedCount) setCount(parseInt(storedCount));
        } catch (error) {
            console.error("Failed to load count from AsyncStorage:", error);
        }
    }

    const loadCountdown = async() => {
        try {
            const storedCountdown = await AsyncStorage.getItem('countdown');
            if (storedCountdown) setCountdown(JSON.parse(storedCountdown));
        } catch (error) {
            console.error("Failed to load countdown from AsyncStorage:", error);
        }
    }

    loadCount();
    loadCountdown();
  }, []);

  // Save count to Async storage
  useEffect(() => {
    const saveCount = async () => {
        try {
            await AsyncStorage.setItem('count', count.toString());
        } catch (error) {
            console.error("Failed to save count to AsyncStorage:", error);
        }
    }

    const saveCountdown = async () => {
        try {
            await AsyncStorage.setItem('countdown', JSON.stringify(countdown));
        } catch (error) {
            console.error("Failed to save count to AsyncStorage:", error);
        }
    }
    saveCount();
    saveCountdown();
  }, [count]);

  return (
    <ThemedView style={styles.container}>
        <Text style={styles.title}>Counter App</Text>
        <Text style={styles.subtitle}>Move the slider to set a limit </Text>
        <Text>{limit}</Text>
        <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={limit}
            onValueChange={updateLimit}
        />

        <Text style={styles.subtitle}>(Press the smile icon to increase count)</Text>
      <Text style={styles.counter}>Counter: {count}</Text>
      {!countdown && (
      <TouchableOpacity onPress={() => updateCount((count + 1)% limit)}>
        <Icon name="emoticon-happy-outline" size={80} color="goldenrod" />
      </TouchableOpacity>)}
      {countdown && (     
        <TouchableOpacity onPress={() => updateCount((count - 1)% limit)}>
        <Icon name="emoticon-sad-outline" size={80} color="goldenrod" />
      </TouchableOpacity>)}
      <TouchableOpacity onPress={() => setCount(0)} style={{ marginTop: 75 }}>
        <Text style={styles.resetText}> Reset </Text>
      </TouchableOpacity>
    </ThemedView>
  )
}

export default eighth

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "darkolivegreen",
        marginBottom: 24,
        fontFamily: "Courier",
    },
    subtitle: {
        fontSize: 15,
        fontFamily: "Courier",
        fontWeight: "bold",
        color: "darkgoldenrod",
        marginBottom: 24,
        textAlign: "center",
    },
    counter: {
        fontSize: 18,
        marginBottom: 12,
        fontWeight: "bold",
        fontFamily: "Courier",
        color: "darkolivegreen",
    },
    resetText: {
        fontSize: 18,
        color: "darkkhaki",
        fontWeight: "bold",
        textDecorationLine: "underline",
    },  
    slider: {
        width: 300,
        height: 40  
    },
})