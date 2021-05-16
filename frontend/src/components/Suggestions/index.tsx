import React from 'react';
import { Container, Option, Img, Label } from './styles/styles';
import items from './items';

export default function Suggestion() {
    return (
        <Container>
            {items.map((item: any) => (
                <Option key={item.key}>
                    <Img source={item.img} />
                    <Label>{item.label}</Label>
                </Option>
            ))}
        </Container>
    );
}
