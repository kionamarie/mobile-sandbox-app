import { StyleSheet, Text, TouchableOpacity, View, Alert, ScrollView } from 'react-native';
import { useState, useMemo, useEffect } from 'react'; // Import useEffect
import ThemedView from '../../components/ThemedView';

const hiddenTiles_temp = ({n = 4 }) => {
    // define const vars
    const totalTiles = n;
    const totalPairs = n / 2;

    // Compute grid shape
    const cols = Math.ceil(Math.sqrt(n));
    const numRows = Math.ceil( n / cols);

    // max steps or max time minus current to get score ; multiply together
    // do highest score ;; you have beat the record message

    // define states and hooks
    const [seconds, setSeconds] = useState(0);
    const [steps, setSteps] = useState(0);
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [tiles, setTiles] = useState(() => { //Initialize tiles
        const initialTiles = [];
        for (let i = 0; i < totalTiles; i++) {
            initialTiles.push({ flipped: false, matched: false });
        }
        return initialTiles;
    });
    const [selectedIndices, setSelectedIndices] = useState([]); // Track selected tile indices


    // to hold the values of the tile labels
    const labels = useMemo(() => {
      let numbers = Array.from ({ length: totalPairs }, (_, i) => i + 1);
      numbers = numbers.concat(numbers);  // double array for dupe numbers
      const shuffled = numbers.sort(() => Math.random() - 0.5);
      return shuffled // return value of shuffled array
    }, [totalTiles])

    // execute loop to create rows of tiles based on number of cols
    const rows = useMemo(() => {
        const temp = [];
        for (let i = 0; i < totalTiles; i += cols) {
            temp.push(labels.slice(i, Math.min(i + cols, totalTiles)));
        }
        return temp;
    }, [labels, totalTiles, cols]);

    const getScore = () => {
      const maxSteps = 25;
      const maxTime = 100;

      const stepScore = maxSteps - steps;
      const timeScore = maxTime - seconds;
      const newScore = stepScore * timeScore;
      setScore(newScore);
    }

    // timer
    useEffect(() => {
      const interval = setInterval (() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
      
      return () => clearInterval(interval);
    }, []);

    // Check for a win condition
    useEffect(() => {
        if (tiles.length > 0 && tiles.every((tile) => tile.matched)) {
            getScore()
            Alert.alert("You win!", "You successfully matched all the tiles with a score of " + score
            );
        }
    }, [tiles]);

    // handler function for pressing tiles
    const handlePressTile = (index) => {
        setSteps((prev) => prev + 1);
        if (selectedIndices.length < 2 && !tiles[index].matched) {
            // Can select tile if less than 2 are selected and it's not flipped or already matched
            setTiles((prev) => {
                const update = [...prev];
                update[index] = { ...update[index], flipped: true }; // Flip the tile
                return update;
            });

            setSelectedIndices([...selectedIndices, index]); // Add selected index to the array
            setCount(selectedIndices.length + 1); //Update the count
        }

        //Checking match or no match after 2 selections
        if (selectedIndices.length === 1) {
            const firstIndex = selectedIndices[0];

            if (labels[firstIndex] === labels[index]) {
                // Match found!
                setTiles((prev) => {
                    const update = [...prev];
                    update[firstIndex] = { ...update[firstIndex], matched: true }; //Mark tiles as matched
                    update[index] = { ...update[index], matched: true };
                    return update;
                });
                setCount(0);
                setSelectedIndices([]); // Clear selected indices for the next pair

            } else {
                // No match, Flip tiles back after delay
                setTimeout(() => {
                    setTiles((prev) => {
                        const update = [...prev];
                        update[firstIndex] = { ...update[firstIndex], flipped: false };
                        update[index] = { ...update[index], flipped: false };
                        return update;
                    });
                    setCount(0);
                    setSelectedIndices([]); // Clear selected indices for the next pair
                }, 1000); // Flip back after 1 second
            }
        }
    };

    // handler function for pressing reset button
    const handleReset = () => {
        const initialTiles = [];
        for (let i = 0; i < totalTiles; i++) {
            initialTiles.push({ flipped: false, matched: false });
        }
        setTiles(initialTiles);
        setCount(0);
        setSelectedIndices([]);
        setSteps(0);
        setSeconds(0);
    };

    return (
      <ScrollView>
        <ThemedView style={styles.container}>
            <Text style={styles.header}>
                Hidden Tiles
            </Text>
            <Text style={{ fontSize: 24}}>Time: {seconds}</Text>
            <Text style={{ fontSize: 24}}>Steps: {steps} </Text>
                        <Text style={{ fontSize: 24}}>Score: {score} </Text>
            {rows.map((row, rowIndex) => (
                <View style={styles.row} key={rowIndex}>
                    {row.map((tileValue, colIndex) => {
                        const index = rowIndex * cols + colIndex;

                        return (
                            <TouchableOpacity
                                key={index}
                                style={[styles.tile, tiles[index].flipped && styles.tileActive, tiles[index].matched && styles.tileMatched]}
                                onPress={() => handlePressTile(index)}
                                activeOpacity={0.8}
                                disabled={tiles[index].matched}
                            >
                                {(tiles[index].flipped || tiles[index].matched) && <Text style={styles.tileText}>{tileValue}</Text>}
                            </TouchableOpacity>
                        );
                    })}
                </View>
            ))}
            <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
                <Text style={styles.resetText}> Reset Tiles</Text>
            </TouchableOpacity>
        </ThemedView>
    </ScrollView>
    );
};

export default hiddenTiles_temp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'darkolivegreen',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
    },
    tile: {
        flex: 1,
        aspectRatio: 1,
        margin: 8,
        borderRadius: 10,
        backgroundColor: 'darkgoldenrod',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 80,
    },
    tileActive: {
        backgroundColor: 'white',
        borderWidth: 4,
        borderColor: 'darkgoldenrod'
    },
    tileText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'darkkhaki',
    },
    resetButton: {
        marginTop: 30,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: 'transparent',
    },
    resetText: {
        fontSize: 18,
        color: 'darkolivegreen',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    tileMatched: {
      backgroundColor: 'white', // Or another color
      borderColor: 'darkolivegreen',
      opacity: 0.5, // Make it semi-transparent
    },
});