const React = require('react');

const {
  Box,
  Text,
  Newline
} = require('ink');

function Tree() {
  return /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column",
    padding: 2
  }, /*#__PURE__*/React.createElement(Text, null, "\uD14C\uC2A4\uD2B8"));
}

;
module.exports = Tree;