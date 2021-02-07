import styled from "styled-components/macro"

export const DropArrowWrapper = styled.div`
    transform: ${props => props.hide ? "rotate(360deg)" : "rotate(180deg)"};
    transition: 0.5s transform;
`

export const ChannelWrapper = styled.div`
    color: #949598;
    display: flex;
    font-weight: bold;
    padding: 2px 10px 2px 20px;
`

export const ChannelListWrapper = styled.div`
    height:${({ hide }) => hide ? "0px" : "200px"};
    transition: height 1s ease;
    overflow:hidden;
`