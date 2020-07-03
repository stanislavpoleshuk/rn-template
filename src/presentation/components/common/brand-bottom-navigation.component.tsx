import React from 'react';
import {Theming} from "services/theme.service";
import {BottomNavigation, BottomNavigationProps, ThemeProvider} from "@ui-kitten/components";
import {ViewStyle} from "react-native";

type ComponentStyle =  {
    containerStyle?: ViewStyle;
}

type Type = BottomNavigationProps & ComponentStyle;

export const BrandBottomNavigation = ({containerStyle, style, ...restProps}: Type): React.ReactElement => {

  const brandTheme = Theming.useTheme('brand');

  return (
    <ThemeProvider theme={brandTheme}>
      <BottomNavigation style={[containerStyle, style]} {...restProps}/>
    </ThemeProvider>
  );
};
