import React, {useState} from "react";
import {Text} from "@ui-kitten/components";
import {ContentArea} from "components/layouts/content-area.component";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {BottomSheet} from "components/bottom-sheet/bottom-sheet";

type Props = {};

export class RobotsContainer extends React.Component<Props> {

    bs = React.createRef()

    renderInner = () => (
        <View style={styles.panel}>
            <Text style={styles.panelTitle}>San Francisco Airport</Text>
            <Text style={styles.panelSubtitle}>
                International Airport - 40 miles away
            </Text>
            <View style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Directions</Text>
            </View>
            <View style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Search Nearby</Text>
            </View>
        </View>
    )

    renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
            </View>
        </View>
    )

    render(): React.ReactElement {
        return (
            <ContentArea style={styles.content}>
                <Text>Мои заказы</Text>

                <BottomSheet
                    ref={this.bs}
                    snapPoints={[400, 0, 0]}
                    renderContent={this.renderInner}
                    renderHeader={this.renderHeader}
                />

            </ContentArea>
        )
    }
}

const IMAGE_SIZE = 200


const styles = StyleSheet.create({
    content: {
        flex: 1
    },box: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
    },
    panelContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    panel: {
        width: '100%',
        height: 600,
        padding: 20,
        backgroundColor: 'red',
    },
    header: {
        backgroundColor: '#f7f5eee8',
        shadowColor: '#000000',
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 4,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#318bfb',
        alignItems: 'center',
        marginVertical: 10,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    }
})