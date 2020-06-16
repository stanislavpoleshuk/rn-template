import React, {useState} from "react";
import {Text} from "@ui-kitten/components";
import {ContentArea} from "components/layouts/content-area.component";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Backdrop} from "components/backdrop/backdrop";

type Props = {};

export const RobotsContainer = (props: Props): React.ReactElement => {
    const [visible, setVisible] = useState(false);

    const handleOpen = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

    return (
        <ContentArea>
            <Text>Мои заказы</Text>
            <TouchableOpacity
                onPress={() => setVisible(true)
                }
            >
                <Text>Handle Backdrop</Text>
            </TouchableOpacity>


            <Backdrop
                visible={visible}
                handleOpen={handleOpen}
                handleClose={handleClose}
            >
                <View>
                    <Text>Backdrop Content</Text>
                </View>
            </Backdrop>
        </ContentArea>
    )
}


const styles = StyleSheet.create({})