import styled from 'styled-components/native';
import colors from './colors';

export const Container = styled.View`
    background: ${colors.background_container};
    margin: 25px 16px;
    border-radius: 8px;
    height: 150px;
    flex-direction: row;
    align-items: center;
    padding: 15px;
`;

export const Details = styled.View`
    flex: 1;
`;

export const Img = styled.Image`
    margin: 5px 10px;
`;

export const Title = styled.Text`
    color: ${colors.color_title};
    font-size: 18px;
    font-weight: bold;
`;

export const Description = styled.Text`
    color: ${colors.color_description};
    font-size: 14px;
    margin-top: 15px;
`;
