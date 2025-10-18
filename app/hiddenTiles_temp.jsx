import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react';

// n = how many boxes, numbers instead of letters

const hiddenTiles = () => {
    const [count, setCount] = useState(0);
    const [tiles, setTiles] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0
    });

    const handlePressTile = (index) => {
        if (count < 2) {
            setCount(count + 1);
            setTiles({
                ...tiles,
                [index]: 1
            });
        } else if (count == 2) {
            setTiles({
                1: 0,
                2: 0,
                3: 0,
                4: 0
            });
            setTiles({
                [index]: 1
            }); 
            setCount(1);
        }
    }

    const resetTiles = () => {
        setTiles({
            1: 0,
            2: 0,
            3: 0,
            4: 0
        });
        setCount(0);
    }

  return (
    <View style={styles.container}>
        <Text style={styles.header}>Hidden Tiles</Text>
        <View style={styles.row}>
            { tiles[1] === 1 ? <TouchableOpacity style={styles.tile} onPress={() => handlePressTile(1)}>
                <Text style={styles.tileText}>W</Text>
            </TouchableOpacity> :
            <TouchableOpacity style={styles.tile} onPress={() => handlePressTile(1)}>
            </TouchableOpacity> }
            { tiles[2] === 1 ? <TouchableOpacity style={styles.tile} onPress={() => handlePressTile(2)}>
                <Text style={styles.tileText}>I</Text>
            </TouchableOpacity> :
            <TouchableOpacity style={styles.tile} onPress={() => handlePressTile(2)}>
            </TouchableOpacity> }
        </View>
        <View style={styles.row}>
            { tiles[3] === 1 ? <TouchableOpacity style={styles.tile} onPress={() => handlePressTile(3)}>
                <Text style={styles.tileText}>F</Text>
            </TouchableOpacity> :
            <TouchableOpacity style={styles.tile} onPress={() => handlePressTile(3)}>
            </TouchableOpacity> }
            { tiles[4] === 1 ? <TouchableOpacity style={styles.tile} onPress={() => handlePressTile(4)}>
                <Text style={styles.tileText}>I</Text>
            </TouchableOpacity> :
            <TouchableOpacity style={styles.tile} onPress={() => handlePressTile(4)}>
            </TouchableOpacity> }
        </View>
        <TouchableOpacity onPress={resetTiles}>
            <Text style={styles.resetText}>Reset Tiles</Text>
        </TouchableOpacity>
    </View>
  )
}

export default hiddenTiles

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "floralwhite",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
    },
    header: {
        fontSize: 32,
        fontWeight: "bold",
        color: "darkolivegreen",
        marginBottom: 24,
    },
    row: {
        flexDirection: "row",
    },
    tile: {
        width: 150,
        height: 150,
        backgroundColor: "darkgoldenrod",
        margin: 10,
        borderRadius: 10,
    },
    tileText: {
        fontSize: 48,
        fontWeight: "bold",
        color: "darkkhaki",
        textAlign: "center",
        marginTop: 50,
    },
    resetText: {
        fontSize: 18,
        color: "darkolivegreen",
        fontWeight: "bold",
        textDecorationLine: "underline",
        marginTop: 50,
    },
})