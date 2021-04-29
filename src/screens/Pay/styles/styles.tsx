import styled from 'styled-components/native';
import colors from './colors';

export const Wrapper = styled.SafeAreaView`
    background: ${colors.color_wrapper};
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const Label = styled.Text`
    font-weight: bold;
    font-size: 24px;
    color: ${colors.color_label};
`;
