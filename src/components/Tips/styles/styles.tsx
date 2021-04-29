import styled from 'styled-components/native';
import Definition from '../repository/Definition';
import colors from './colors';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingLeft: 16,
    }
}))`
    margin-top: 25px;
`;

export const Option = styled.TouchableOpacity`
    background: ${({ bgColor }: Definition) => bgColor};
    width: 150px;
    height: 200px;
    border-radius: 8px;
    padding: 15px;
    justify-content: space-between;
    margin-right: 16px;
`;

export const Title = styled.Text`
    color: ${colors.colorTitle};
    font-size: 16px;
    font-weight: bold;
`;

export const Img = styled.Image`
    align-self: center;
`;
