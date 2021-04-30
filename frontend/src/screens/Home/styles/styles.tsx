import styled from 'styled-components/native'
import colors from './colors';

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    background: ${colors.background_wrapper};
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
    height: 50px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const BalanceContainer = styled.View`
`;

export const BalanceTitle = styled.Text`
    color: ${colors.color_balance_title};
    font-size: 14px;
    text-align: center;
`;

export const Balance = styled.Text`
    color: ${colors.color_balance};
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`;
