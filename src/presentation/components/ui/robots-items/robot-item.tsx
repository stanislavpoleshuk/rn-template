import React from "react";
import {StyleSheet, View} from "react-native";
import {SignalDto} from "domain/robots/signal.dto";

type Props = {
    item: SignalDto;
};

export const RobotItem: React.FC<Props> = ({item}) =>{
    return (
       <View style={styles.container}>

       </View>
    )
}


const styles = StyleSheet.create({
    container: {
    }
})
