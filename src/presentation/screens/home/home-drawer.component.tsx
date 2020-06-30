import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {
    Avatar,
    Divider,
    Drawer,
    DrawerElement,
    Layout,
    Text,
} from '@ui-kitten/components';
import {BookIcon, GithubIcon} from "../../resources/icons";
import {AppInfoService} from "services/app-info.service";
import {WebBrowserService} from "services/web-browser.service";
import {SafeAreaLayout} from "components/layouts/safe-area-layout.component";
import {ImageResources} from "resources/images/imageResources";
import {FontSize} from "core/theme/styles/font.styles";
import {ThemesChanger} from "screens/home/themes/themes-changer.component";
import {Devices} from "../../../infrastructure/utilities/devices";


const DATA = [
    {title: 'Libraries', icon: GithubIcon},
    {title: 'Documentation', icon: BookIcon},
];

export const HomeDrawer = ({navigation}): DrawerElement => {

    const onItemSelect = (index: number): void => {
        switch (index) {
            case 0: {
                navigation.toggleDrawer();
                navigation.navigate('Libraries');
                return;
            }
            case 1: {
                WebBrowserService.openBrowserAsync('https://akveo.github.io/react-native-ui-kitten');
                navigation.toggleDrawer();
                return;
            }
        }
    };

    const renderHeader = () => (
        <Layout
            style={styles.header}
            level='2'>
            <View style={styles.profileContainer}>
                <Avatar
                    size='giant'
                    source={ImageResources.logo}
                />
                <Text
                    style={styles.profileName}
                    category='h6'>
                    Stanislav Poleshuk
                </Text>
            </View>
        </Layout>
    );

    const Version = (): React.ReactElement => (
        <Text style={styles.versionText} appearance='hint'>{`Version ${AppInfoService.getVersion()}`}</Text>
    );

    const renderFooter = () => (
        <React.Fragment>
            <Divider/>
            <View
                style={styles.footer}
            >
                <Version/>
                <ThemesChanger/>
            </View>
        </React.Fragment>
    );

    return (
        <SafeAreaLayout
            style={styles.safeArea}
            insets={"top"}
        >
            <Drawer
                header={renderHeader}
                footer={renderFooter}
            />
        </SafeAreaLayout>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    header: {
        height: 128,
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileName: {
        marginHorizontal: 16,
    },
    footer: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    versionText: {
        ...FontSize.medium,
    }
});
