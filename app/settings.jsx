import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import { THEMES } from '../constants/themes';
import { useTheme}  from '../context/ThemeContext';

const settings = () => {
    const { theme, setTheme } = useTheme();

    const handleThemeSelect = (themeId) => {
        setTheme(themeId);
    }

  return (
    <ThemedView style={styles.container}>
        <ThemedText 
            title={true} 
            style={styles.header}
        >
            Choose a Theme
        </ThemedText>
        <ThemedText 
            style = {styles.currentThemeText}
        >
            Current Theme: {theme.name}
        </ThemedText>

        <View style={styles.themesList}>
            {THEMES.map((t) => (
                <TouchableOpacity
                    key={t.id}
                    onPress={() => handleThemeSelect(t.id)}
                    style={[
                        styles.themeButton,
                        {
                            backgroundColor: t.colors.background},
                        theme.id === t.id && styles.selectedThemeButton
                    ]}
                    >
                        <Text 
                            style={[
                                styles.themeButtonText,
                                { color: t.colors.text }
                            ]}
                        >
                            {t.name}
                        </Text>
                    </TouchableOpacity>
            ))}
        </View>
    </ThemedView>
  )
}

export default settings

const styles = StyleSheet.create({
  fullScreen: { flex: 1 },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  header: {
    marginBottom: 30,
    fontWeight: 'bold',
  },
  currentThemeText: {
    marginBottom: 20,
    fontStyle: 'italic',
  },
  themeOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 600,
  },
  themeButton: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    margin: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'transparent',
    minWidth: 120,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedButton: {
    borderColor: '#007bff', // Highlight color for the active theme
    borderWidth: 4,
  },
  themeButtonText: {
    fontWeight: '600',
    fontSize: 16,
  },
});