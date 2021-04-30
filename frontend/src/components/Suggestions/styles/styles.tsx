import styled from 'styled-components/native';
import colors from './colors';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16,
    }
}))`
    background: ${colors.background};
    height: 130px;
`;

export const Option = styled.TouchableOpacity`
    width: 80px;
    margin-right: 16px;
    align-items: center;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
    color: ${colors.color_white};
    font-weight: bold;
    margin-top: 18px;
    font-size: 14px;
`;
