const React = require('react');
const { useState, useEffect } = require('react');
const { Box, Text } = require('ink');

function TwinklingText({ children, colors = [], interval = 200,...props }) {
  const [on, setOn] = useState(false);
 
  useEffect(() => {
      const timer = setInterval (() => setOn(v => !v), interval);
      return () => clearInterval(timer);
  }, []);

return <Text color={on ? colors[0] : colors[1]} {...props} >{children}</Text>
}

function Tree() {
  
  const starColors = ['yellow', ''];
  const lightColors = ['red', 'white'];

  return (
    <Box flexDirection="column" padding={2}>
      <TwinklingText colors={starColors}>    _\/_</TwinklingText>
      <TwinklingText colors={starColors}>     /\</TwinklingText>
      <Text color="green">     /\</Text>
      <Text color="green">    /  \</Text>
      <Text color="green">    /~~\<TwinklingText colors={lightColors} interval={300}>o</TwinklingText></Text>
      <Text color="green">   /<TwinklingText colors={lightColors}>o</TwinklingText>   \</Text>
      <Text color="green">  /~~*~~~\</Text>
      <Text color="green"> <TwinklingText colors={lightColors} interval={150}>o</TwinklingText>/    <TwinklingText colors={lightColors} interval={200}>o</TwinklingText> \</Text>
      <Text color="green"> /~~~~~~~~\</Text>
      <Text color="green">/__*_______\</Text>
      <Text>     ||</Text>
      <Text>   \====/</Text>
      <Text>    \__/</Text>
    </Box>
  );
};

module.exports = Tree;