import React, { Component } from 'react'
import ChatNavHeader from "./ChatNavHeader";
import PublicChannel from "../Channels/PublicChannel";
import PrivateChannel from "../Channels/PrivateChannel";
import DirectMessage from "../Channels/DirectMessage";
import "../../App.css"
import styled from 'styled-components/macro';

const NavArea = styled.div`
    min-height: 100vh;
    width: ${props=> props.hide ? "0px" : "333px"};
    background: #0F0F13;
    transition: 1s width;
`

class ChatNavigationBarView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: false
        }
    }

    changeHide = () => {
        const { hide } = this.state;
        this.setState({
            hide: !hide
        })
    }

    render() {
        const { hide } = this.state;
        return (
            <NavArea hide={hide} className={"Nav-area"}>
                <ChatNavHeader changeHide={this.changeHide} hide={hide} />
                <PublicChannel/>
                <PrivateChannel/>
                <DirectMessage/>
            </NavArea>)
    }

}


export default ChatNavigationBarView;