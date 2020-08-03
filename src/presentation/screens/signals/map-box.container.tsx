import React, {useRef, useState} from "react";
import MapboxGL from "@react-native-mapbox-gl/maps";
import {Alert, StyleSheet, View} from "react-native";
import MapBoxSettings from "infrastructure/settings/map-box/map-box.settings";
import {BookIcon, PickDotIcon, PickIcon} from "resources/icons";
import Animated, {Easing} from "react-native-reanimated";


type Props = {}
export const MapBoxContainer = (props: Props): React.ReactElement => {
    const ref = useRef<MapboxGL.MapView>(null);
    const [isDrag, setDrag] = useState<boolean>(false);


    const onUserMarkerPress = () => {
        Alert.alert('You pressed on the user location annotation');
    }

    const onRegionWillChange = (feature: any) => {
        setDrag(true);

    }

    const onRegionDidChange = (feature: any) => {
        setDrag(false);
    }

    const CenterIconMarker = () => {
        const animatedStyle = {
            transform: [{translateY: isDrag ? 0 : 15}],
        };
        return (
            <View style={styles.marker}>
                <Animated.View style={[styles.pickIcon, animatedStyle]}>
                    <PickIcon/>
                </Animated.View>
                <PickDotIcon top={-10} zIndex={1}/>
            </View>
        )
    }

    return (
        <>
            <MapboxGL.MapView
                ref={ref}
                onRegionWillChange={onRegionWillChange}
                onRegionDidChange={onRegionDidChange}
                localizeLabels={true}
                logoEnabled={false}
                attributionEnabled={true}
                compassEnabled={false}
                styleURL={MapBoxSettings.mapStyleUrl}
                style={styles.matchParent}
            >
                <MapboxGL.Camera
                    followZoomLevel={17}
                    followUserLocation
                />
                <MapboxGL.UserLocation onPress={onUserMarkerPress}/>
            </MapboxGL.MapView>
            <CenterIconMarker/>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    matchParent: {flex: 1},
    marker: {
        zIndex: 3,
        position: 'absolute',
        marginTop: -74,
        marginLeft: -32,
        left: '50%',
        top: '50%'
    },
    pickIcon: {
        zIndex: 2,
    }
});
