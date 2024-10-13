import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Icon} from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge">Coffstack</Text>

        <Icon name="eyeOn" color="error" size={50} />
        <Icon name="eyeOff" color="carrotSecondary" size={40} />
        <Icon name="arrowRight" color="success" size={100} />
        <Icon name="checkRound" color="greenSuccess" size={70} />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
