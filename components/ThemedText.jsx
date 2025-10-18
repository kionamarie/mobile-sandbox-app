import { View, Text, useColorScheme } from 'react-native'
import { Colors } from "../constants/colors";
import { useTheme } from '../context/ThemeContext';

const ThemedText = ({style, title = false, ...props}) => {
  const { theme } = useTheme();

  // Define defaults
  const defaultColor = 'black';
  let color;

  if (theme && theme.colors) {
    if (title) {
      color = theme.colors.title;
    } else {
      color = theme.colors.text; 
    } 
  } else {
    color = defaultColor;
  }

  return (
    <Text style={[{ color }, style ]} {...props} />
  )

//     const colorScheme = useColorScheme();
//     const theme = Colors[colorScheme] ?? Colors.light;
//     const textColor = title ? theme.title : theme.text;
    
//   return (
//     <Text style={[{ color: textColor }, style ]} {...props} />
//   )
// }
}

export default ThemedText