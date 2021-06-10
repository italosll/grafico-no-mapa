/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from '@chakra-ui/button';
import Link from 'next/link';
import { Flex } from '@chakra-ui/layout';
import { useContext } from 'react';
import { FlowContext } from '../../../contexts/FlowContext';
// eslint-disable-next-line max-len
import { AccuracyQuestionsContext } from '../../../contexts/AccuracyQuestionsContext';
import Questions from '../../../questions/Accuracy';
import QualitativeQueston from './QualitativeQuestion';
import { QualitativeQuestionsContext } from '../../../contexts/QualitativeQuestionsContext';
import validation from '../../../../validation/validation';

const ButtonProps = {
  width: { base: '100%', md: '100%', lg: '20rem' },
  height: { base: '3rem', lg: '100%' },
  maxHeight: '4rem',
  rounded: { base: 'none', lg: 'full' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  _focus: { textDecoration: 'none' },
  _hover: { textDecoration: 'none' },
};

function mountAnswerObject() {
  const obj = {
    age_interval: localStorage.getItem('idade'),
    visual_impairment: localStorage.getItem('deficiencia_visual'),
    education_level: localStorage.getItem('grau_de_escolariadade'),
    sex: localStorage.getItem('sexo'),
    background_color: localStorage.getItem('background_color'),
    color_scheme: localStorage.getItem('esquema_de_cores'),
    aq1: localStorage.getItem('1'),
    aq2: localStorage.getItem('2'),
    aq3: localStorage.getItem('3'),
    aq4: localStorage.getItem('4'),
    aq5: localStorage.getItem('5'),
    aq6: localStorage.getItem('6'),
    aq7: localStorage.getItem('7'),
    aq8: localStorage.getItem('8'),
    aq9: localStorage.getItem('9'),
    aq10: localStorage.getItem('10'),
    aq11: localStorage.getItem('11'),
    aq12: localStorage.getItem('12'),
    aq13: localStorage.getItem('13'),
    aq14: localStorage.getItem('14'),
    aq15: localStorage.getItem('15'),
    aq16: localStorage.getItem('16'),
    qq1a: localStorage.getItem('q_1_a'),
    qq1b: localStorage.getItem('q_1_b'),
    qq1c: localStorage.getItem('q_1_c'),
    qq2a: localStorage.getItem('q_2_a'),
    qq2b: localStorage.getItem('q_2_b'),
    qq2c: localStorage.getItem('q_2_c'),
    qq3a: localStorage.getItem('q_3_a'),
    qq3b: localStorage.getItem('q_3_b'),
    qq3c: localStorage.getItem('q_3_c'),
    qq4a: localStorage.getItem('q_4_a'),
    qq4b: localStorage.getItem('q_4_b'),
    qq4c: localStorage.getItem('q_4_c'),
  };
  return obj;
}
export default function CustomButton() {
  const {
    redyToNextPage,
    nextPage,
    actualPage,
    setRedyToNextPage,
  } = useContext(FlowContext);

  const {
    actualAccuracyQuestion,
    setIsAccuracyFinished,
    setActualAccuracyQuestion,
    setActualAccuracyAnswer,
  } = useContext(AccuracyQuestionsContext);

  const {
    actualQualitativeQuestion,
    setActualQualitativeQuestion,
    setActualQualitativeAnswer,
  } = useContext(QualitativeQuestionsContext);

  function mountHref(): string {
    if (redyToNextPage) {
      if (actualPage === '/AccuracyQuestionsPage') {
        if (actualAccuracyQuestion >= Questions.length) {
          return '/QualitativeQuestions';
        }
        return '/AccuracyQuestionsPage';
      }

      if (actualPage === '/QualitativeQuestions') {
        if (actualQualitativeQuestion >= 4) {
          return '/FinishPage';
        }
        return '/QualitativeQuestions';
      }

      return nextPage;
    }
    return '#';
  }

  function continuePressed() {
    if (mountHref() === '/QualitativeQuestions') {
      setIsAccuracyFinished(true);
      localStorage.setItem('accuracyFinished', 'true');
    }

    setRedyToNextPage(false);
    if (
      actualPage === '/AccuracyQuestionsPage'
      && actualAccuracyQuestion < Questions.length
    ) {
      setActualAccuracyQuestion(actualAccuracyQuestion + 1);
      setActualAccuracyAnswer('');
    }
    if (actualPage === '/QualitativeQuestions') {
      setActualQualitativeQuestion(actualQualitativeQuestion + 1);
      setActualQualitativeAnswer(['']);
    }

    if (actualAccuracyQuestion + 1 >= 16 && actualQualitativeQuestion + 1 >= 4) {
      const answer = mountAnswerObject();
      console.log(answer);
      console.log('conditiopn');
      console.log('validation');
      console.log(validation(answer));
    }
  }

  return (
    <Flex
      width={{ base: '100%', lg: '10rem' }}
      minHeight="4rem"
      justifyContent="center"
      alignItems={{ base: 'flex-end', lg: 'flex-start' }}
      marginX="auto"
    >
      <Link href={mountHref()}>
        <Button
          {...ButtonProps}
          background={redyToNextPage ? '#48BB78' : '#777'}
          disabled={!redyToNextPage}
          cursor={redyToNextPage ? 'pointer' : 'not-allowed'}
          onClick={() => continuePressed()}
        >
          <a>Continuar</a>
        </Button>
      </Link>
    </Flex>
  );
}
