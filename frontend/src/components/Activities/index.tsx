import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
    Container,
    Header,
    Title,
    Card,
    CardHeader,
    Menina,
    Description,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel,
} from './styles/styles';

import girl from '../../images/girl.jpeg';

export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Menina source={girl} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@apenas_anacris</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Ana Cristina</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 600,00</Value>

                        <Divider/>


                        <Feather name="lock" color="#fff" size={14} />
                        <Date>Há 2 dias</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="hearto" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}
