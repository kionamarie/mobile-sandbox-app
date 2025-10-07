import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {useState} from 'react'
import Slider from '@react-native-community/slider';

const colorbox = () => {
    const [red, setRed] = useState('0');
    const [green, setGreen] = useState('0');
    const [blue, setBlue] = useState('0');
    const [text, setText] = useState('');

    const clamp = (value ) => {
        const num = parseInt(value, 10);
        if (isNaN(num)) return 0;
        return Math.max(0, Math.min(255, num));
    };

    const getRGBColor = () => {
        return `rgb(${clamp(red)}, ${clamp(green)}, ${clamp(blue)})`;
    };
    
    return (
    <View style={styles.container}>
        <View style={styles.textBox}>
        <TextInput
            style={[styles.textInput, { color: getRGBColor() }]}
            multiline={true}
            value={text}
            onChangeText={setText}
            placeholder="Type here to change my color!"
        />
        </View>
        <View>
            <Text style={styles.sliderText}>R: {red}%</Text>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={255}
                step={1}
                value={red}
                onValueChange={setRed}
            />
            <Text style={styles.sliderText}>G: {green}%</Text>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={255}
                step={1}
                value={green}
                onValueChange={setGreen}
            />
            <Text style={styles.sliderText}>B: {blue}%</Text>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={255}
                step={1}
                value={blue}
                onValueChange={setBlue}
            />
            {/* <TextInput
                style={styles.textInput}
                onChangeText={setRed}
                value={red}
            />
            <TextInput
                style={styles.textInput}
                onChangeText={setGreen}
                value={green}
            />
            <TextInput
                style={styles.textInput}
                onChangeText={setBlue}
                value={blue}
            /> */}
        </View>
    </View>
    )
}


export default colorbox

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10%', 
        backgroundColor: 'floralwhite',
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
        height: 250,
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
    }
})