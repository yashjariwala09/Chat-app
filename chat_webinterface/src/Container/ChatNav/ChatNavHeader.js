import React, { Component } from "react"
import { ReactComponent as MenuIcon } from "../../Assets/menu-black-48dp.svg"
import { ReactComponent as PlayIcon} from "../../Assets/play_circle_filled-black-48dp.svg"
import styled from 'styled-components/macro';

const HideShowButton = styled.div`
    position: absolute;
    right: -25px;
    border-radius: 45px;
    background: #6e6eb9;
    z-index:1;
    transform: ${props => props.hide ? "rotate(360deg)" : "rotate(180deg)"};
    transition: 0.5s transform;
    :hover {
        cursor: pointer;
    }
`

class ChatNavHeader extends Component {
    render() {
        const { changeHide, hide } = this.props;
        return (
            <div style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>
                <div className="Nav-Header">
                    <MenuIcon fill="white" width={33} height={33} className={"Menu-Button"} />
                    <span className="ml-2 text-nowrap">Chat App</span>
                    <HideShowButton hide={hide}>
                        <PlayIcon onClick={()=>changeHide()} fill="white" width={45} height={45} />
                    </HideShowButton>
                </div>
            </div>
        )
    }
}


export default ChatNavHeader;
