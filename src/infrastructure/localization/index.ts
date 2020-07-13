import LocalizedStrings from 'react-native-localization';
import {userLocalization} from "./localizations/user.localization";
import {screensLocalization} from "./localizations/screens.localization";
import {errorsLocalization} from "./localizations/errors.localization";
import {commonLocalization} from "./localizations/common.localization";
import {homeLocalization} from "./localizations/home.localization";
import {tabsLocalization} from "./localizations/tabs.localization";
import {authLocalization} from "localization/localizations/auth.localization";


class Localization {
    auth = new LocalizedStrings(authLocalization);
    screens = new LocalizedStrings(screensLocalization);
    tabs = new LocalizedStrings(tabsLocalization);
    common = new LocalizedStrings(commonLocalization);
    errors = new LocalizedStrings(errorsLocalization);
    user = new LocalizedStrings(userLocalization);
    home = new LocalizedStrings(homeLocalization);

    getLanguage(): string {
        return this.common.getLanguage();
    }
}

export const localization = new Localization();
