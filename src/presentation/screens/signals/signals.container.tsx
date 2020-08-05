import React from "react";
import {ContentArea} from "components/layouts/content-area.component";
import {StyleSheet} from "react-native";
import {MapBoxContainer} from "screens/signals/map-box.container";

type Props = {}

export const SignalsContainer = (props: Props): React.ReactElement => {

    return (
        <ContentArea style={styles.content}>
            <MapBoxContainer/>
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