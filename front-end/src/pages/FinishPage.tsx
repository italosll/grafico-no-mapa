import { Flex, Text } from '@chakra-ui/layout';
import { useEffect } from 'react';
import Div100vh from 'react-div-100vh';

export default function FinishPage() {
  // useEffect(() => {
  //   localStorage.setItem('finished', 'true');
  // });

  return (
    <Div100vh>
      <Flex
        background="blue"
        width="100%"
        height="100%"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          width="250px"
          height="250px"
          background="url(/check.png)"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundPosition="center"
        />
        <Text color="white" fontSize="2rem" maxWidth="80vw" fontWeight="700">
          Muito obrigado, você contribuiu de forma significativa para a minha
          pesquisa!
        </Text>
      </Flex>
    </Div100vh>
  );
}
