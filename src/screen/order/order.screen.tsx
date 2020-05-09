import {HeaderBackButton, NavigationStackScreenProps} from 'react-navigation-stack';
import React from 'react';
import {ThemedComponentProps} from "@ui-kitten/components";
import {localization} from "../../core/localization";
import {View} from "react-native";


interface ComponentProps {
}

export type CreateInstitutionScreenProps = ThemedComponentProps & NavigationStackScreenProps & ComponentProps;

interface State {
}

class CreateInstitutionContainer extends React.Component<CreateInstitutionScreenProps, State> {
    private navigationKey: string = 'CreateInstitutionScreen';

    static navigationOptions = ({navigation}: { navigation: NavigationScreenProp<NavigationState> }) => {
        const title = navigation.getParam('stepTitle');
        return {
            title: title ? title : localization.pages.home,
        };
    };

    constructor(props: CreateInstitutionScreenProps) {
        super(props);
        this.state = {};
    }


    public async componentDidMount() {
    }

    public render(): React.ReactNode {
        return (
            <View>

            </View>
        );
    }
}
