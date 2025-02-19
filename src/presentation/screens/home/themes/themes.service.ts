import { ThemeItem } from './type';
import {Mapping, Theme} from "application/app/theme.service";

export class ThemesService {

  static createThemeListItems = (themes, mapping: Mapping): ThemeItem[] => {
    return Object.keys(themes[mapping])
                 .filter(key => key !== 'brand')
                 .map((theme: Theme) => ThemesService.createThemeForMapping(
                   themes,
                   mapping,
                   theme,
                 ));
  };

  static createThemeForMapping = (themes, mapping: Mapping, theme: Theme): ThemeItem => {
    return {
      mapping: mapping,
      name: theme,
      theme: themes[mapping][theme],
    };
  };

}
