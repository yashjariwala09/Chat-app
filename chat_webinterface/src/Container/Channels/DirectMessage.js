import React, { Component } from 'react';
import ChannelHeader from '../../Component/ChannelHeader';
import { ReactComponent as DropArrow } from "../../Assets/DropArrow.svg"
import { ReactComponent as PlusIcon } from "../../Assets/PlusIcon.svg"
import { DropArrowWrapper, ChannelWrapper } from "./ComonFunction"
import avtar from "../../Assets/avtar.jpg"
import "./index.css"


class DirectMessageList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hideList: false
        }
    }

    handdleHideList = () => {
        const { hideList } = this.state;
        this.setState({ hideList: !hideList })
    }

    render() {
        const { hideList } = this.state;
        const userList = [{ name: "Yash Jariwala", messagesCount: 10 }, { name: "Krunal Badami", messagesCount: 120 }, { name: "Tiren Jariwala", messagesCount: 0 }];
        const row = []
        if (userList && userList.length) {
            userList.forEach((value, key) => {
                row.push(
                    <ChannelWrapper key={"directMessage_" + key + value.name}>
                        <div className="img-wrapper"><img src={avtar} alt="error" /></div>
                        <div className="ml-1 text-nowrap">{value.name}</div>
                        <div className="ml-auto">{value.messagesCount}</div>
                    </ChannelWrapper>
                )
            })
        }
        return (
            <div>
                <div className="Channel-header">
                    <div className="toggle-header" onClick={this.handdleHideList} data-toggle="collapse" data-target="#collapse_direct_message">
                        <DropArrowWrapper hide={!hideList}>
                            <DropArrow height={30} width={30} fill={"#6B6C71"} />
                        </DropArrowWrapper>
                        <ChannelHeader headerTtle={"Direct Messages"} fontSize={16} color={"#6B6C71"} />
                    </div>
                    <span style={{ marginLeft: "auto", overflow: "hidden" }}><PlusIcon height={24} width={24} fill={"white"} /></span>
                </div>
                <div className="collapse message-list-collapse" id="collapse_direct_message">
                    {row}
                </div>
            </div>
        )
    }
}
export default DirectMessageList;