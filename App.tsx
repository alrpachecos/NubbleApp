import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge">Coffstack</Text>

        <Button
          title="Primary"
          preset="primary"
          disabled
          marginBottom="spacing24"
        />
        <Button
          disabled
          title="Outline"
          preset="outline"
          marginBottom="spacing24"
        />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
