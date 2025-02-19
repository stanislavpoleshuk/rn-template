import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BookIcon, GithubIcon} from "../../resources/icons";
import {AppInfoService} from "application/app/app-info.service";
import {WebBrowserService} from "application/app/web-browser.service";
import {SafeAreaLayout} from "components/layouts/safe-area-layout.component";
import {ImageResources} from "resources/images/imageResources";
import {FontSize} from "core/theme/styles/font.styles";
import {ThemesChanger} from "screens/home/themes/themes-changer.component";
import {Avatar, Divider, Drawer, DrawerElement, DrawerItem, Layout, Text} from "@ui-kitten/components";


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
        >
            <Drawer
                header={renderHeader}
                footer={renderFooter}
                onSelect={index => onItemSelect(index.row)}
            >
                <DrawerItem title='Users' accessoryLeft={BookIcon} />
                <DrawerItem title='Orders' accessoryLeft={GithubIcon} />
            </Drawer>
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
        paddingVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    versionText: {
        ...FontSize.medium,
    }
});
