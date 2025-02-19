import * as eva from '@eva-design/eva';
// @ts-ignore
import { default as customEva } from './app-mapping-eva.json';
// @ts-ignore
import { default as appTheme } from './app-theme.json';

export const appMappings = {
  eva: {
    mapping: eva.mapping,
    customMapping: customEva,
  }
};

export const appThemes = {
  eva: {
    light: eva.light,
    dark: eva.dark,
    brand: {
      light: appTheme,
      dark: appTheme,
    },
  },
};
