// ...existing code...
import { useState, useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ThemedView from '../components/ThemedView';

const hiddenTiles = ({ n = 4, columns = 2 }) => {
  const numUnique = n;              // Identify the number of unique tiles
  const totalTiles = numUnique * 2; // Calculate the total number of tiles, duplicating each unique tile
//   const totalTiles = numUnique / 2; // Calculate the total number of tiles, duplicating each unique tile

  // Create labels array containing duplicated numbers for the tile text
  const labels = useMemo(
    () => Array.from({ length: totalTiles }, (_, i) => Math.floor(i / 2) + 1),
    [totalTiles]
  );

  //double the array (using concat to itself) then apply shuffling function
  // need to 

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  // Store count info
  const [count, setCount] = useState(0);
  const [tiles, setTiles] = useState(() => Array.from({ length: totalTiles }, () => false)); // Set tiles state to array with length of total tiles calculated earlier

  const rows = useMemo(() => {
    const out = [];
    // Use loop to create rows of tiles based on number of columns
    for (let i = 0; i < totalTiles; i += columns) {
      out.push(tiles.slice(i, i + columns));
    }
    return out;
  }, [tiles, totalTiles, columns]);

  const handlePressTile = (index) => {
    if (count < 2) {
      setTiles((prev) => {
        const next = [...prev];
        next[index] = true;
        return next;
      });
      setCount((c) => c + 1);
    } else {
      const reset = Array.from({ length: totalTiles }, () => false);
      reset[index] = true;
      setTiles(reset);
      setCount(1);
    }
  };

  const resetTiles = () => {
    setTiles(Array.from({ length: totalTiles }, () => false));
    setCount(0);
  };

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.header}>Hidden Tiles</Text>

      {rows.map((row, rowIdx) => (
        <View style={styles.row} key={rowIdx}>
          {row.map((revealed, colIdx) => {
            const index = rowIdx * columns + colIdx;
            if (index >= totalTiles) return null;
            return (
              <TouchableOpacity
                key={index}
                style={[styles.tile, revealed && styles.tileActive]}
                onPress={() => handlePressTile(index)}
                activeOpacity={0.8}
              >
                {revealed && <Text style={styles.tileText}>{labels[index]}</Text>}
              </TouchableOpacity>
            );
          })}
        </View>
      ))}

      <TouchableOpacity onPress={resetTiles} style={styles.resetButton}>
        <Text style={styles.resetText}>Reset Tiles</Text>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default hiddenTiles;

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
});