import { StyleSheet, Text, View, TextInput, Button} from 'react-native'
import {useState} from 'react'
import Slider from "@react-native-community/slider";
import ThemedText from '../components/ThemedText';
import ThemedView from '../components/ThemedView';


// Tip Calculator App

const ninth = () => {
  const [billTotal, setBillTotal] = useState('');
  const [tip, setTip] = useState(0);
  const [split, setSplit] = useState('1');
  const [result, setResult] = useState(null);

const calculateTip = () => {
    const bill = parseFloat(billTotal);
    const numberOfPeople = parseInt(split);

    if (isNaN(bill) || isNaN(numberOfPeople) || numberOfPeople < 1) {
        setResult('Invalid input');
        return;
    }
    const totalTip = (bill * tip / 100);
    const totalBill = bill + totalTip;
    const perPerson = totalBill / numberOfPeople;

    setResult({ totalTip: totalTip.toFixed(2), perPerson: perPerson.toFixed(2), totalBill: totalBill.toFixed(2) });
};

const updateSlider = (value) => {
    setTip(value);
    calculateTip();
};

const updateBill = (value) => {
    setBillTotal(value);
    calculateTip();
};
const updateSplit = (value) => {
    setSplit(value);
    calculateTip();
};

  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.title}>Tip Calculator</ThemedText>
      <ThemedText style={styles.subtitle}>Let's calculate how much to tip for your meal</ThemedText>
      <TextInput 
        style={styles.input}
        placeholder='Bill Total'
        keyboardType='numeric'
        value={billTotal}
        onChangeText={updateBill}
        />
      <Text>{tip}%</Text>
      <Slider
        style={styles.slider}
        minmimumValue={0}
        maximumValue={30}
        step={1}
        value={tip}
        onValueChange={updateSlider}
        />
      <TextInput 
        style={styles.input}
        placeholder='Split btwn how many people?'
        value={split}
        onChangeText={updateSplit}
        />
    {result && (
      <View style={styles.resultContainer}>
        {typeof result === 'string' ? (
          <Text style={styles.resultText}>{result}</Text>
        ) : (
          <>
          <Text style={styles.result}>Total Tip: ${result.totalTip}</Text>
          <Text style={styles.result}>Per Person: ${result.perPerson}</Text>
          <Text style={styles.result}>Total Bill with Tip: ${result.totalBill}</Text>
        </>
        )}
      </View>
    )};
    </ThemedView>
  )
}

export default ninth

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
        height: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: '100%',
    },
    slider: {
        width: '100%',
        height: 40,
        marginBottom: 20,
    },
    resultContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    resultText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    result: {
        fontSize: 16,
        marginTop: 10,
    },  
})