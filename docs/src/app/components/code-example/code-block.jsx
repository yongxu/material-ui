const React = require('react');
const { Styles } = require('material-ui');
const { Spacing } = Styles;


const CodeBlock = React.createClass({

  contextTypes : {
    muiTheme: React.PropTypes.object
  },

  //for passing default theme context to children
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getChildContext () {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  getInitialState () {
    return {
      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme),
    };
  },

  componentWillReceiveProps (nextProps, nextContext) {
    let newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({muiTheme: newMuiTheme});
  },

  componentDidMount() {
    var code = React.findDOMNode(this.refs.code);
    require([
      "codemirror/lib/codemirror.js",
      "codemirror/mode/htmlmixed/htmlmixed.js",
    ], function(Codemirror){
      Codemirror.fromTextArea(code, {
        mode: "htmlmixed",
        readOnly: true,
      });
    });
  },

  shouldComponentUpdate({children}, nextState){
    return this.props.children !== children;
  },

  render() {
    return (
      <textarea ref="code" value={this.props.children} readOnly={true}/>
    );
  },
});

module.exports = CodeBlock;
