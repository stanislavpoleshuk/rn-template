import {ContentArea} from "components/layouts/content-area.component";
import {Text} from "@ui-kitten/components";
import {StyleSheet, TouchableOpacity} from "react-native";
import React, {useRef} from "react";
import {Portal} from "react-native-portalize";
import {Modalize} from "react-native-modalize";
import {ExampleModalizeCustomize} from "components/modalize/components/examples/example-modalize-customize";

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


            <Portal>
                <ExampleModalizeCustomize
                    ref={modalizeRef}
                />
            </Portal>
        </ContentArea>
    )
}


const styles = StyleSheet.create({
    content: {
        // flex: 1
    },
})