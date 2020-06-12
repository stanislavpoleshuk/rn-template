import React from "react";
import {StyleSheet} from "react-native";
import {useFetchRobots} from "hooks/useFetchRobots";
import {formatRobotsData} from "./extra/helpers";
import {RobotsList} from "components/ui/robots-list/robots-list";

type Props = {
    displayType: string;
    searchText: string;
};

export const SearchRobotsContainer: React.FC<Props> = ({displayType, searchText}) =>{
    const { robotsData, counts, loading, loading_aggregate, isLoadingMore, onFetchMore } =
        useFetchRobots(displayType, searchText, formatRobotsData);

    return (
        <>
            <RobotsList
                loading={loading}
                data={robotsData}
            />
        </>
    )
}

const styles = StyleSheet.create({

})