import React, { useState } from 'react';
import { Autocomplete, Button, Paper, Stack, TextField } from '@mui/material';
import FormData from '../components/FormData';

const Practice = () => {
  const [formData, setFormData] = useState([]);
  const [textData, settextData] = useState('');
  const [language, setLanguage] = useState('');
  const [index, setIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const languages = ['English', 'French', 'Turkish', 'German'];

  const textChangeHandler = (e, index) => {
    console.log('indexoftoucedelement', index);
    settextData(e.target.value);
  };

  const languageChangeHandler = (e) => {
    console.log('indexoftoucedelement', index);
    setLanguage(e);
  };

  const indexChangeHandler = (e) => {
    setIndex(e);
    console.log('indexoftoucedelement', e);
  };

  console.log('index', index);

  const addHandler = (e) => {
    const data = {
      textData,
      language,
    };
    // setFormData((prevState) => [...prevState, data]);
    setFormData([...formData, data]);
    settextData('');
    setLanguage('');
  };

  const editHandler = (e) => {
    const indexxxx = formData?.findIndex(
      (elem, elemIndex) => elemIndex === index
    );
    // const formText = formData[indexxxx];

    console.log(indexxxx, 'formText');
  };

  const updateHandler = () => {};

  console.log(formData, 'formData');
  return (
    <>
      <Stack>
        <Stack
          spacing={2}
          direction='row'
          marginTop='4rem'
          marginRight='2rem'
          justifyContent='end'
        >
          <Button variant='outlined' size='large'>
            Cancel
          </Button>
          <Button
            variant='outlined'
            size='large'
            onClick={(index) => addHandler(index)}
          >
            Add
          </Button>
        </Stack>
        <FormData
          languages={languages}
          textChangeHandler={textChangeHandler}
          languageChangeHandler={languageChangeHandler}
          addHandler={addHandler}
          indexChangeHandler={indexChangeHandler}
          editHandler={editHandler}
        />

        {formData?.map?.((item, index) => {
          console.log(item, 'iteemmm');
          return (
            <FormData
              item={item}
              index={index}
              languages={languages}
              textChangeHandler={textChangeHandler}
              languageChangeHandler={languageChangeHandler}
              addHandler={addHandler}
              indexChangeHandler={indexChangeHandler}
              editHandler={editHandler}
            />
          );
        })}
      </Stack>
    </>
  );
};

export default Practice;
