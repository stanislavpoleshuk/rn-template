import React from "react";
import {ContentArea} from "components/layouts/content-area.component";
import {StyleSheet} from "react-native";
import MapView from "react-native-yandex-mapkit";

type Props = {}

export const SignalsContainer = (props: Props): React.ReactElement => {

    return (
        <ContentArea style={styles.content}>
            <MapView
                style={styles.mapContainer}
            />
        </ContentArea>
    )
}


const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 0,
        paddingVertical: 0
    },
    mapContainer: {
        flex: 1
    }
})