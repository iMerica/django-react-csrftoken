'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _reactDomFactories = require('react-dom-factories');

var _reactDomFactories2 = _interopRequireDefault(_reactDomFactories);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DjangoCSRFToken = function (_React$Component) {
  (0, _inherits3.default)(DjangoCSRFToken, _React$Component);

  function DjangoCSRFToken() {
    (0, _classCallCheck3.default)(this, DjangoCSRFToken);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DjangoCSRFToken.__proto__ || (0, _getPrototypeOf2.default)(DjangoCSRFToken)).call(this));

    _this.state = {
      csrfToken: _reactCookie2.default.load('csrftoken')
    };
    return _this;
  }

  (0, _createClass3.default)(DjangoCSRFToken, [{
    key: 'render',
    value: function render() {
      return _reactDomFactories2.default.input({
        type: 'hidden',
        name: 'csrfmiddlewaretoken',
        value: this.state.csrfToken
      });
    }
  }]);
  return DjangoCSRFToken;
}(_react2.default.Component);

exports.default = DjangoCSRFToken;