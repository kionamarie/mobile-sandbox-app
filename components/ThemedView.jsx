import { View, Text, useColorScheme } from 'react-native'
import { Colors } from "../constants/colors";
import { useTheme } from '../context/ThemeContext';

const ThemedView = ({style, ...props}) => {
  // Use the global theme state
    const { theme } = useTheme();

  // Set the appropriate colors from the theme object; fallback to default if missing
    const defaultBackgroundColor = 'floralwhite';
    if (theme && theme.colors && theme.colors.background) {
      backgroundColor = theme.colors.background;
    } else {
      backgroundColor = defaultBackgroundColor;
    }

  return (
    <View style={[{ backgroundColor: backgroundColor }, style]} {...props} />
  )
}

export default ThemedView