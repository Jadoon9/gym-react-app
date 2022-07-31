import React, { useState } from 'react';
import { Autocomplete, Button, Paper, Stack, TextField } from '@mui/material';
import FormData from '../components/FormData';
import FormData1 from '../components/FormData1';

const Practice = () => {
  const [formData, setFormData] = useState([]);
  const [textData, settextData] = useState('');
  const [language, setLanguage] = useState('');

  const languages = ['English', 'French', 'Turkish', 'German'];

  const textChangeHandler = (e, index) => {
    if (index === undefined) {
      console.log('indexoftoucedelement', index);
      settextData(e.target.value);
    }

    if (index !== undefined) {
      // const item = formData[index];
      // const updated = (item.textData = e.target.value);
      setFormData([...formData, formData[(index.textData = e.target.value)]]);
      // console.log(item, 'itemsadadas');
    }
  };

  const languageChangeHandler = (e, index) => {
    console.log('indexoftoucedelement', index);
    setLanguage(e);
  };

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
    // const indexxxx = formData?.map((elem) => elem[index]);
    // const formText = formData[indexxxx];
    // console.log(indexxxx, 'formText');
  };

  const updateHandler = () => {};

  console.log(formData, 'danggeeerrr');
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
        <FormData1
          languages={languages}
          language={language}
          textData={textData}
          textChangeHandler={textChangeHandler}
          languageChangeHandler={languageChangeHandler}
          addHandler={addHandler}
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
            />
          );
        })}
      </Stack>
    </>
  );
};

export default Practice;
