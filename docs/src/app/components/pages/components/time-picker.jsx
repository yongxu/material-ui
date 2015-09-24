let React = require('react');
let { TimePicker } = require('material-ui');
let ComponentDoc = require('../../component-doc');
let Code = require('time-picker-code');
let CodeExample = require('../../code-example/code-example');


let TimePickerPage = React.createClass({

  render() {

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'defaultTime',
            type: 'date object',
            header: 'optional',
            desc: 'This is the initial time value of the component.'
          },
          {
            name: 'format',
            type: 'one of: ampm, 24hr',
            header: 'default: ampm',
            desc: 'Tells the component to display the picker in ampm (12hr) format or 24hr format.'
          },
          {
            name: 'pedantic',
            type: 'boolean',
            header: 'default: false',
            desc: 'It\'s technically more correct to refer to "12 noon" and "12 midnight" rather than "12 a.m." and "12 p.m." and it avoids real confusion between different locales. By default (for compatibility reasons) TimePicker uses (12 a.m./12 p.m.) To use (noon/midnight) set pedantic={true}.'
          }
        ]
      },
      {
        name: 'Methods',
        infoArray: [
          {
            name: 'getTime',
            header: 'TimePicker.getTime()',
            desc: 'Returns the current time value.'
          },
          {
            name: 'setTime',
            header: 'TimePicker.setTime(t)',
            desc: 'Sets the time value to t, where t is a date object.'
          },
          {
            name: 'formatTime',
            header: 'TimePicker.formatTime(time)',
            desc: 'Formats the Date object to a current component\'s time format.'
          }
        ]
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onChange',
            header: 'function(null, time)',
            desc: 'Callback function that is fired when the time value ' +
            'changes. The time value is passed in a Date Object.'
          },
          {
            name: 'onFocus',
            header: 'function(e)',
            desc: 'Callback function that is fired when the timepicker field ' +
                  'gains focus.'
          },
          {
            name: 'onDismiss',
            header: 'function()',
            desc: 'Fired when the timepicker dialog is dismissed.'
          },
          {
            name: 'onShow',
            header: 'function()',
            desc: 'Fired when the timepicker dialog is shown.'
          }
        ]
      }
    ];

    return (
      <ComponentDoc
        name="Time Picker"
        componentInfo={componentInfo}>
        <CodeExample code={Code}>
          <TimePicker
            ref="picker12hr"
            format="ampm"
            hintText="12hr Format"
            onChange={this._changeTimePicker24} />

          <TimePicker
            ref="picker24hr"
            format="24hr"
            hintText="24hr Format"
            onChange={this._changeTimePicker12}  />
        </CodeExample>
      </ComponentDoc>
    );
  },
  _changeTimePicker24(err, t){
    this.refs.picker24hr.setTime(t);
  },
  _changeTimePicker12(err, t){
    this.refs.picker12hr.setTime(t);
  }

});

module.exports = TimePickerPage;
