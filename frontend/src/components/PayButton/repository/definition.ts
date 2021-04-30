type DefinitionType = {
    onPress: any;
    focused: boolean;
} 

export default interface Definition { 
    onPress: Promise<DefinitionType> | any;
    focused: Promise<DefinitionType> | any;
}