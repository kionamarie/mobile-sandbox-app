import { Image, useColorScheme } from 'react-native'
import dark from '../assets/images/dark.jpg'
import background from '../assets/images/background.jpg'


const ThemedLogo = ({style, ...props}) => {
    const colorScheme = useColorScheme();
    const logo = colorScheme === 'dark' ? dark : background;
    
  return (
    <Image source={logo} style={style} />
  )
}

export default ThemedLogo