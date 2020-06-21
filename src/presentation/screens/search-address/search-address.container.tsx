import {ContentArea} from "components/layouts/content-area.component";
import {TouchableOpacity, View, Image} from "react-native";
import {Modalize} from "react-native-modalize";
import {Button, Text, } from "@ui-kitten/components";
import {StyleSheet} from "react-native";
import React, {forwardRef, useEffect, useRef, useState} from "react";
import faker from 'faker';
import {useCombinedRefs} from "../../../infrastructure/utilities/use-combined-refs";

type Props = {}

export const SearchAddressContainer = forwardRef((_, ref) => {
    const modalizeRef = useRef(null);
    const contentRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, modalizeRef);

    const handleScrollToTop = () => {
        if (contentRef.current) {
            contentRef.current.getScrollResponder().scrollTo({
                y: 0,
                animated: true,
            });
        }
    };

    const renderHeader = () => (
        <View style={styles.modal__header}>
            <Text style={styles.modal__headerText}>50 users online</Text>
        </View>
    );

    const renderContent = () => (
        <ContentArea style={styles.content}>
            {Array(50)
                .fill(0)
                .map((_, i) => (
                    <View style={styles.content__row} key={i}>
                        <View style={styles.content__avatar}>
                            <Image
                                style={{ width: '100%', height: '100%' }}
                                source={{ uri: faker.image.avatar() }}
                            />
                        </View>

                        <Text style={styles.content__name}>{faker.name.findName()}</Text>
                    </View>
                ))}

            <View style={styles.content__button}>
                <Button onPress={handleScrollToTop}>
                    Scroll to Top
                </Button>
            </View>
        </ContentArea>
    );

    return (
        <Modalize
            ref={combinedRef}
            contentRef={contentRef}
            HeaderComponent={renderHeader}
            snapPoint={350}
        >
            {renderContent()}
        </Modalize>
    );
});

const styles = StyleSheet.create({
    content: {
        // flex: 1
    },
    modal__header: {
        paddingVertical: 15,
        marginHorizontal: 15,

        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },

    modal__headerText: {
        fontSize: 15,
        fontWeight: '200',
    },

    content__row: {
        flexDirection: 'row',
        alignItems: 'center',

        paddingVertical: 15,

        borderBottomColor: '#f9f9f9',
        borderBottomWidth: 1,
    },

    content__avatar: {
        width: 38,
        height: 38,

        marginRight: 15,

        overflow: 'hidden',

        backgroundColor: '#eee',
        borderRadius: 19,
    },

    content__name: {
        fontSize: 16,
    },

    content__button: {
        alignItems: 'center',
        justifyContent: 'center',

        marginVertical: 20,
    },
})