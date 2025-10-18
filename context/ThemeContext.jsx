
import { LightTheme, THEMES, THEME_KEY } from '../constants/themes';
import { createContext, useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext({
    theme: LightTheme,
    setTheme: () => {},
});

// Create custom hook so context can be used more easily
export const useTheme = () => useContext(ThemeContext);

// Define provider component 
// For managing the global theme state and persistence
export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(LightTheme);
    const [isLoading, setIsLoading] = useState(true);

    // Persistence part
    // Load theme from AsyncStorage on mount
    useEffect(() => {
        const loadSavedTheme = async () => {
            try {
                const savedThemeId = await AsyncStorage.getItem(THEME_KEY);
                if (savedThemeId) {
                    // Get theme obj matching the saved ID
                    const match = THEMES.find(t => t.id === savedThemeId);
                    if (match) {
                        setCurrentTheme(match);
                    }
                }
            } catch (error) {
                console.error("Failed to load theme:", error);
            } finally {
                setIsLoading(false);
            }
        }

        loadSavedTheme();
    }, []);

    // Handles saving and updating state
    const saveSetTheme = async (themeId) => {
        const newTheme = THEMES.find(t => t.id === themeId);;
        if (newTheme) {
            try {
                await AsyncStorage.setItem(THEME_KEY, themeId);
                setCurrentTheme(newTheme);
            } catch (error) {
                console.error("Failed to save theme:", error);
            }
        }
    };

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text style={styles.loadingText}>Loading Theme...</Text>
            </View>
        );
    }

    const contextValue = {
        theme: currentTheme,
        setTheme: saveSetTheme,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'floralWhite', 
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: 'black',
    }
});