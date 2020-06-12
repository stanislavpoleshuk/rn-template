import LocalizedStrings from 'react-native-localization';
import {userLocalization} from "./localizations/user.localization";
import {pagesLocalization} from "./localizations/pages.localization";
import {errorsLocalization} from "./localizations/errors.localization";
import {commonLocalization} from "./localizations/common.localization";
import {homeLocalization} from "./localizations/home.localization";
import {modalsLocalization} from "./localizations/modals.localization";
import {tabsLocalization} from "./localizations/tabs.localization";


class Localization {
    pages = new LocalizedStrings(pagesLocalization);
    modals = new LocalizedStrings(modalsLocalization);
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
