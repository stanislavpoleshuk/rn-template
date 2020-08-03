import React from "react";
import MapboxGL from "@react-native-mapbox-gl/maps";
import {Alert, StyleSheet} from "react-native";
import MapBoxSettings from "infrastructure/settings/map-box/map-box.settings";


type Props = {}
export const MapBoxContainer = (props: Props): React.ReactElement => {

    const onUserMarkerPress = () => {
        Alert.alert('You pressed on the user location annotation');
    }

    return (
        <MapboxGL.MapView
            localizeLabels={true}
            logoEnabled={true}
            attributionEnabled={false}
            compassEnabled={false}
            styleURL={MapBoxSettings.mapStyleUrl}
            style={styles.matchParent}>
            <MapboxGL.Camera
                followZoomLevel={17}
                followUserLocation
            />
            <MapboxGL.UserLocation onPress={onUserMarkerPress}/>
        </MapboxGL.MapView

        >
    )
}


const styles = StyleSheet.create({
    matchParent: {flex: 1},
});
