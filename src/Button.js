import React, { Component, PropTypes } from 'react';
import { Block, Inline } from 'jsxstyle';
import Center from './Center';

const DeleteButton = ({ onClick }) =>
  <Inline fontSize='2rem'
          position='absolute'
          right='.5rem'
          top='-.25rem'
          color='#aaa'
          cursor='pointer'>
    <span onClick={onClick}>×</span>
  </Inline>;

export default class Button extends Component {
  static propTypes = {
    char: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
  };

  handleClick(e) {
    e.stopPropagation();
    this.props.onClick(this.props.char);
  }

  handleDeleteClick(e) {
    e.stopPropagation();
    this.props.onDeleteClick(this.props.char);
  }

  handleInputChange(e) {
    console.info(e.target.files);
  }

  render() {
    const { char, isLocked } = this.props;
    return (
      <div onClick={::this.handleClick}>
        <Center position='relative'
                width='8rem'
                height='8rem'
                margin='2rem'
                border={`4px ${isLocked ? 'solid' : 'dashed'} #222`}
                fontSize='4rem'
                textAlign='center'
                fontWeight='bold'
                borderRadius={16}>
          {char}
          {!isLocked &&
            <input type='file'
                   onChange={this.handleInputChange}
                   accept='audio/mpeg'
                   style={{
                     position: 'absolute',
                     top: 0,
                     left: 0,
                     right: 0,
                     bottom: 0,
                     opacity: 0,
                     width: '100%',
                     height: '100%',
                     cursor: 'pointer'
                   }} />
          }
          {!isLocked &&
            <DeleteButton onClick={::this.handleDeleteClick} />
          }
        </Center>
      </div>
    );
  }
}
