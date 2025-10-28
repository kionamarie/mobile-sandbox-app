import { StyleSheet, Switch, Image, TextInput, useColorScheme, View } from 'react-native'
import {useState} from 'react'
import Slider from '@react-native-community/slider';
import ThemedText from '../../components/ThemedText';
import ThemedLogo from "../../components/ThemedLogo";
import ThemedView from '../../components/ThemedView';


const colorbox = () => {
    const [red, setRed] = useState('0');
    const [green, setGreen] = useState('0');
    const [blue, setBlue] = useState('0');
    const [text, setText] = useState('');
    const [switchValue, setSwitchValue] = useState(false); // False: Background, True: Text

    const clamp = (value ) => {
        const num = parseInt(value, 10);
        if (isNaN(num)) return 0;
        return Math.max(0, Math.min(255, num));
    };

    const getRGBColor = () => {
        return `rgb(${clamp(red)}, ${clamp(green)}, ${clamp(blue)})`;
    };

    const toggleSwitch = () => {
        setSwitchValue(!switchValue);
    }
    
    return (
    <ThemedView style={styles.container}>
        <ThemedLogo style={styles.image} />
        <View>
        { !switchValue && 
        <View style={styles.textBox}>
        <TextInput
            style={[styles.textInput, { color: getRGBColor() }]}
            multiline={true}
            value={text}
            onChangeText={setText}
            placeholder="Type here to change my color!"
        />
        </View>
}
        { switchValue && 
        <View style={styles.textBox}>
        <TextInput
            style={[styles.textInput, { backgroundColor: getRGBColor() }]}
            multiline={true}
            value={text}
            onChangeText={setText}
            placeholder="Type here to change my color!"
        />
        </View>
}
        </View>
        <View>
            <ThemedText style={styles.sliderText}>R: {red}%</ThemedText>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={255}
                step={1}
                value={red}
                onValueChange={setRed}
            />
            <ThemedText style={styles.sliderText}>G: {green}%</ThemedText>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={255}
                step={1}
                value={green}
                onValueChange={setGreen}
            />
            <ThemedText style={styles.sliderText}>B: {blue}%</ThemedText>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={255}
                step={1}
                value={blue}
                onValueChange={setBlue}
            />
            <Switch
                style={styles.switch}
                value={switchValue}
                onValueChange={toggleSwitch}
            />
        </View>
    </ThemedView>
    )
}


export default colorbox

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10%', 
    },
    textBox: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    textInput: {
        height: 225,
        width: 250,
        fontSize: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 25,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
    slider: {
        width: 200,
        height: 40,
        marginBottom: 20,
    },
    sliderText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    switch: {
        marginLeft: 75,
    },
    image: {
        width: '100%',
        height: 150,
        marginBottom: 5,
    }, 
})