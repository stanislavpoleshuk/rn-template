import React, {useEffect, useRef} from "react";
import MapboxGL from "@react-native-mapbox-gl/maps";
import {Alert, StyleSheet, View} from "react-native";
import MapBoxSettings from "infrastructure/settings/map-box/map-box.settings";
import {PickDotIcon, PickIcon} from "resources/icons";
import Animated, {Easing} from "react-native-reanimated";
import GeoCodingOSM, {IReverseParams} from "geocoding-osm";
import {PermissionsRequest} from "../../../infrastructure/settings/permissions/permissions.request";

GeoCodingOSM.setLanguage("ru");

type Props = {}

export const MapBoxContainer = (props: Props): React.ReactElement => {
    const refMap = useRef<MapboxGL.MapView>(null);
    const refCamera = useRef<MapboxGL.Camera>(null);

    const animatedValue = new Animated.Value(15);


    useEffect(() => {
        PermissionsRequest.requestLocationPermission().then();
    }, []);

    const onUserMarkerPress = () => {
        Alert.alert('You pressed on the user location annotation');
    }

    const animatingPick = (isDrag: boolean) => {
        Animated.timing(animatedValue, {
            toValue: isDrag ? 0 : 15,
            duration: 220,
            easing: Easing.sin
        }).start();
    }


    const onRegionWillChange = (feature: any) => {
        animatingPick(true);
    }

    const onRegionDidChange = (feature: any) => {
        console.log(feature, 'feature')
        animatingPick(false);
        searchPoint(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);
    }

    const searchPoint = (lat: number, lon: number) => {
        const reverseParams: IReverseParams = {
            lat,
            lon,
            zoom: 18,
            addressdetails: 1
        };
        const geoCodingOSM = new GeoCodingOSM();
        geoCodingOSM.reverse(reverseParams).then(value => {
            console.log('reverse: ', value);
        })
    }

    const CenterIconMarker = () => {
        const animatedStyle = {
            transform: [{translateY: animatedValue}],
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
                ref={refMap}
                onRegionWillChange={onRegionWillChange}
                onRegionDidChange={onRegionDidChange}
                localizeLabels={true}
                logoEnabled={false}
                attributionEnabled={false}
                compassEnabled={false}
                styleURL={MapBoxSettings.mapStyleUrl}
                style={styles.matchParent}
            >
                <MapboxGL.Camera
                    ref={refCamera}
                    followZoomLevel={18}
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
