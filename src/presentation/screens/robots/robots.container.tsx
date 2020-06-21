import {ContentArea} from "components/layouts/content-area.component";
import {TouchableOpacity} from "react-native";
import {Modalize} from "react-native-modalize";
import {Text} from "@ui-kitten/components";
import {StyleSheet} from "react-native";
import React, {useRef} from "react";

type Props = {}

export const RobotsContainer = (props: Props): React.ReactElement => {

    const modalizeRef = useRef<Modalize>(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    return (
        <ContentArea style={styles.content}>
            <Text>Мои заказы</Text>

            <TouchableOpacity onPress={onOpen}>
                <Text>Open the modal</Text>
            </TouchableOpacity>

            <Modalize
                ref={modalizeRef}
                snapPoint={350}
            >
                <Text>...your content</Text>
            </Modalize>

        </ContentArea>
    )
}


const styles = StyleSheet.create({
    content: {
        // flex: 1
    },
})