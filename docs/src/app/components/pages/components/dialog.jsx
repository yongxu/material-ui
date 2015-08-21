let React = require('react');
let { Dialog, FlatButton, RaisedButton, Toggle } = require('material-ui');
let ComponentDoc = require('../../component-doc');
let Code = require('dialog-code');
let CodeExample = require('../../code-example/code-example');


class DialogPage extends React.Component {

  constructor() {
    super();
    this.state = {
      modal: false
    };
    this._handleCustomDialogCancel = this._handleCustomDialogCancel.bind(this);
    this._handleCustomDialogSubmit = this._handleCustomDialogSubmit.bind(this);
    this._handleScrollableDialogCancel = this._handleScrollableDialogCancel.bind(this);
    this._handleScrollableDialogSubmit = this._handleScrollableDialogSubmit.bind(this);
    this._handleCustomDialogTouchTap = this._handleCustomDialogTouchTap.bind(this);
    this._handleStandardDialogTouchTap = this._handleStandardDialogTouchTap.bind(this);
    this._handleScrollableDialogTouchTap = this._handleScrollableDialogTouchTap.bind(this);
    this._handleToggleChange = this._handleToggleChange.bind(this);
  }

  render() {

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'actions',
            type: 'array',
            header: 'optional',
            desc: 'This prop can be either a JSON object containing the actions to render, or an array of react objects.'
          },
          {
            name: 'actionFocus',
            type: 'string',
            header: 'optional',
            desc: 'The ref of the action to focus on when the dialog is displayed.'
          },
          {
            name: 'contentClassName',
            type: 'string',
            header: 'optional',
            desc: 'The className to add to the dialog window content container. This is the Paper ' +
                  'element that is seen when the dialog is shown.'
          },
          {
            name: 'contentInnerStyle',
            type: 'object',
            header: 'optional',
            desc: 'Overrides the inline-styles of the dialog container under the title.'
          },
          {
            name: 'contentStyle',
            type: 'object',
            header: 'optional',
            desc: 'Overrides the inline-styles of the dialog window content container.'
          },
          {
            name: 'modal',
            type: 'boolean',
            header: 'default: false',
            desc: 'Force the user to use one of the actions in the dialog. Clicking outside the dialog will not dismiss the dialog.'
          },
          {
            name: 'openImmediately',
            type: 'bool',
            header: 'default: false',
            desc: 'Set to true to have the dialog automatically open on mount.'
          },
          {
            name: 'title',
            type: 'node',
            header: 'optional',
            desc: 'The title to display on the dialog. Could be number, string, element or an array containing these types.'
          },
          {
            name: 'autoDetectWindowHeight',
            type: 'bool',
            header: 'default: true',
            desc: 'If set to true, the height of the dialog will be auto detected. A max height will be enforced so that the '
              + 'content does not extend beyond the viewport.'
          },
          {
            name: 'autoScrollBodyContent',
            type: 'bool',
            header: 'default: false',
            desc: 'If set to true, the body content of the dialog will be scrollable.'
          }
        ]
      },
      {
        name: 'Methods',
        infoArray: [
          {
            name: 'dismiss',
            header: 'Dialog.dismiss()',
            desc: 'Hides the dialog.'
          },
          {
            name: 'show',
            header: 'Dialog.show()',
            desc: 'Shows the dialog.'
          }
        ]
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onDismiss',
            header: 'function()',
            desc: 'Fired when the dialog is dismissed.'
          },
          {
            name: 'onShow',
            header: 'function()',
            desc: 'Fired when the dialog is shown.'
          }
        ]
      }
    ];

    let standardActions = [
      { text: 'Cancel' },
      { text: 'Submit', onTouchTap: this._onDialogSubmit, ref: 'submit' }
    ];

    let customActions = [
      <FlatButton
        key={1}
        label="Cancel"
        secondary={true}
        onTouchTap={this._handleCustomDialogCancel} />,
      <FlatButton
        key={2}
        label="Submit"
        primary={true}
        onTouchTap={this._handleCustomDialogSubmit} />
    ];
    let scrollableCustomActions = [
      <FlatButton
        key={1}
        label="Cancel"
        secondary={true}
        onTouchTap={this._handleScrollableDialogCancel} />,
      <FlatButton
        key={2}
        label="Submit"
        primary={true}
        onTouchTap={this._handleScrollableDialogSubmit} />
    ];

    return (
      <ComponentDoc
        name="Dialog"
        componentInfo={componentInfo}>
        <CodeExample code={Code}>
          <RaisedButton label="Standard Actions" onTouchTap={this._handleStandardDialogTouchTap} />
          <br/><br/>
          <RaisedButton label="Custom Actions" onTouchTap={this._handleCustomDialogTouchTap} />
          <br/><br/>
          <RaisedButton label="Scrollable Content And Custom Actions" onTouchTap={this._handleScrollableDialogTouchTap} />

          <Dialog
            ref="standardDialog"
            title="Dialog With Standard Actions"
            actions={standardActions}
            actionFocus="submit"
            modal={this.state.modal}>
            The actions in this window are created from the json that&#39;s passed in.
          </Dialog>

          <Dialog
            ref="customDialog"
            title="Dialog With Custom Actions"
            actions={customActions}
            modal={this.state.modal}>
            The actions in this window were passed in as an array of react objects.
          </Dialog>
          <div style={{width: '300px', margin: '0 auto', paddingTop: '20px'}}>
            <Toggle
              label="Is Modal"
              onToggle={this._handleToggleChange}
              defaultToggled={this.state.modal}/>
          </div>
          <Dialog
            ref="scrollableContentDialog"
            title="Dialog With Scrollable Content"
            actions={scrollableCustomActions}
            modal={this.state.modal}
            autoDetectWindowHeight={true}
            autoScrollBodyContent={true}>
            <div style={{height: '1000px'}}>
              Really long content
            </div>
          </Dialog>
        </CodeExample>
      </ComponentDoc>
    );

  }

  _onDialogSubmit() {
    console.log('Submitting');
  }

  _handleCustomDialogCancel() {
    this.refs.customDialog.dismiss();
  }

  _handleCustomDialogSubmit() {
    this.refs.customDialog.dismiss();
  }

  _handleToggleChange(e, toggled) {
    this.setState({modal: toggled});
  }

  _handleScrollableDialogCancel() {
    this.refs.scrollableContentDialog.dismiss();
  }

  _handleScrollableDialogSubmit() {
    this.refs.scrollableContentDialog.dismiss();
  }

  _handleCustomDialogTouchTap() {
    this.refs.customDialog.show();
  }

  _handleStandardDialogTouchTap() {
    this.refs.standardDialog.show();
  }

  _handleScrollableDialogTouchTap() {
    this.refs.scrollableContentDialog.show();
  }

}

module.exports = DialogPage;
