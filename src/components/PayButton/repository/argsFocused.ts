type ArgsType = {
    focused: boolean;
}

export default interface Args extends ArgsType {
    focused: Promise<ArgsType> | any;
}