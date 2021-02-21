import React, { Component } from "react";
import styled from "styled-components/macro";
import { Picker } from "emoji-mart";
import {
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  Modifier,
} from "draft-js";

import { ReactComponent as BoldIcon } from "../../Assets/BoldIcon.svg";
import { ReactComponent as ItalicIcon } from "../../Assets/ItalicIcon.svg";
import { ReactComponent as EmojiIcon } from "../../Assets/emojiIcon.svg";

import "./chatInput.css";

const ButtonWrapper = styled.button`
  background: transparent;
  padding: 0px;
  border: 0;
  border-radius: 5px;
  margin-left: ${props=>props.marginLeft?props.marginLeft:0}px
`;

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerOpen: false,
      editorState: EditorState.createEmpty(),
    };
    this.onChange = (editorState) => this.setState({ editorState });
    this.setEditor = (editor) => {
      this.editor = editor;
    };
    this.focusEditor = () => {
      if (this.editor) {
        this.editor.focus();
      }
    };
  }

  togglePicker = () => {
    const { pickerOpen } = this.state;
    this.setState({ pickerOpen: !pickerOpen });
  };

  componentDidMount() {
    this.focusEditor();
  }

  _toggleInlineStyle(e, inlineStyle) {
    console.log(inlineStyle);
    e.preventDefault();
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return true;
    }

    return false;
  }

  _mapKeyToEditorCommand(e) {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        this.state.editorState,
        4 /* maxDepth */
      );
      if (newEditorState !== this.state.editorState) {
        this.onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }

  addEmoji = (e) => {
    const newEditorState = this.insertCharacter(
      e.native,
      this.state.editorState
    );
    this.onChange(newEditorState);
  };

  insertCharacter(characterToInsert, editorState) {
    const currentContent = editorState.getCurrentContent(),
      currentSelection = editorState.getSelection();

    const newContent = Modifier.replaceText(
      currentContent,
      currentSelection,
      characterToInsert
    );

    const newEditorState = EditorState.push(
      editorState,
      newContent,
      "insert-characters"
    );

    return newEditorState;
  }
  render() {
    const { pickerOpen, editorState } = this.state;
    const currentStyle = editorState.getCurrentInlineStyle();
    const inlineStyle = [
      {
        lable: "BOLD",
        component: <BoldIcon height={32} width={32} fill={"#58595D"} />,
      },
      {
        lable: "ITALIC",
        component: <ItalicIcon height={32} width={32} fill={"#58595D"} />,
      },
    ];

    return (
      <div className={"chat-input-wrapper"}>
        <div className="chat-text-area" onClick={this.focusEditor}>
          <Editor
            ref={this.setEditor}
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            keyBindingFn={this.mapKeyToEditorCommand}
          />
        </div>
        <div className="format-wrapper">
          <div>
            {inlineStyle.map((type,index) => {
              return (
                <ButtonWrapper
                  onMouseDown={(e) => this._toggleInlineStyle(e, type.lable)}
                  style={{
                    background: currentStyle.has(type.lable)
                      ? "aliceblue"
                      : "transparent",
                  }}
                  marginLeft={index === 0 ? 0 : 5}
                  key={type.lable}
                >
                  {type.component}
                </ButtonWrapper>
              );
            })}
          </div>
          <div style={{ marginLeft: "auto", position: "relative" }}>
            {pickerOpen && (
              <Picker
                className="emoji-picker-custom"
                // set='native'
                native={true}
                title="Pick your emoji…"
                emoji="point_up"
                theme="dark"
                // color="#ae65c5"
                style={{ position: "absolute", bottom: "20px", right: "20px" }}
                onSelect={this.addEmoji}
              />
            )}
            <ButtonWrapper onClick={() => this.togglePicker()}>
              <EmojiIcon height={32} width={32} fill={"#58595D"} />
            </ButtonWrapper>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatInput;
