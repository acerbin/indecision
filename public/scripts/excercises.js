"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      options: props.options
    };
    _this.clearOptions = _this.clearOptions.bind(_this);
    _this.chooseOption = _this.chooseOption.bind(_this);
    _this.addOption = _this.addOption.bind(_this);
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "clearOptions",
    value: function clearOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "chooseOption",
    value: function chooseOption() {
      var randomIndex = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[randomIndex]);
    }
  }, {
    key: "addOption",
    value: function addOption(option) {
      if (!option) {
        return "Add a valid option";
      } else if (this.state.options.indexOf(option) > -1) {
        return "Option is already defined";
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var subtitle = "Leave your life in the hands of a computer!";
      // const options = ["Option one", "Option two", "Option three"]
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, { optionsAbility: this.state.options.length > 0, chooseOption: this.chooseOption }),
        React.createElement(Options, { options: this.state.options, clearOptions: this.clearOptions }),
        React.createElement(AddOption, { addOption: this.addOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []
};

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      "h2",
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: "Indecision"
};

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      {
        onClick: props.chooseOption,
        disabled: !props.optionsAbility
      },
      " What should I do "
    )
  );
};

var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    props.optionText
  );
};

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.clearOptions },
      "Clear Options"
    ),
    props.options.map(function (option) {
      return React.createElement(Option, { key: option, optionText: option });
    })
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleNewOption = _this2.handleNewOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleNewOption",
    value: function handleNewOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      e.target.elements.option.value = '';
      var error = this.props.addOption(option);
      this.setState(function () {
        return {
          error: error
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          "Add Options:"
        ),
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleNewOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var placeholder = document.getElementById("app");

ReactDOM.render(React.createElement(IndecisionApp, null), placeholder);
