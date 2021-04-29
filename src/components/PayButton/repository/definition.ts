import { TouchableWithoutFeedback } from 'react-native';

type DefinitionType = {
    onPress: any;
    focused: boolean;
} 

export default interface Definition extends TouchableWithoutFeedback { 
    onPress: Promise<DefinitionType> | any;
    focused: Promise<DefinitionType> | any;
}