import React from "react";
import {FlatList, StyleSheet} from "react-native";
import {SignalDto} from "domain/robots/signal.dto";
import {RobotItem} from "components/ui/robots-items/robot-item";
import {EmptyData} from "components/content/empty-data.container";
import {localization} from "core/../../../../infrastructure/localization";

type Props = {
    data: any;
    loading: boolean;
};

export const RobotsList: React.FC<Props> = ({data, loading}) =>{

    const keyExtractor = (item: SignalDto) => `${item.id}`;

    const renderItem = ({item, index}: {item: SignalDto, index: number}) => {
        return (
            <RobotItem
                item={item}
            />
        )
    }

    return (
        <FlatList
            contentContainerStyle={styles.container}
            keyExtractor={keyExtractor}
            data={data}
            renderItem={renderItem}
            ListEmptyComponent={<EmptyData loading={loading} message={localization.common.listEmpty}/>}
        />
    )
}


const styles = StyleSheet.create({
    container: {
    }
})
