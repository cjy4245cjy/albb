import React from 'react';
import { Dialog, FlatButton } from 'material-ui'

export default class DialogExampleSimple extends React.Component {
  render() {
    const actions = [
      <FlatButton
        label="关闭"
        primary={true}
        onTouchTap={this.props.handleClose}
      />
    ];

    return (
      <div>
        <Dialog
          title={this.props.title}
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
          bodyStyle={{fontSize:'18px',color:'#000'}}
          titleStyle={{color:'red'}}
        >
          {this.props.content}
        </Dialog>
      </div>
    );
  }
}

module.exports = exports['default']
