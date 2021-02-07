import React from 'react';
import styled from 'styled-components/macro';

const HeaderTitle = styled.div`
    color:${({ color }) => color || 'white'};
    font-size:${({ fontSize }) => fontSize || "16"}px;
    font-weight:700
`

export default function ChannelHeader({ headerTtle, fontSize, color }) {
    return (
        <HeaderTitle fontSize={fontSize} color={color}>
            {headerTtle.toUpperCase()}
        </HeaderTitle>
    )
}