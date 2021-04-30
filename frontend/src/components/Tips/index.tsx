import React from 'react';
import { Container, Option, Title, Img } from './styles/styles';
import items from './items';

export default function Tips() {
    return (
        <Container>
            {items.map((item: any, index: any) => (
                <Option key={index} bgColor={item.bgColor}>
                    <Title>{item.title}</Title>

                    <Img source={item.img} />
                </Option>
            ))}
        </Container>
    );
}
