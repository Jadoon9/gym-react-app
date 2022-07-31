import React, { useEffect, useState } from 'react';
import { Autocomplete, Button, Paper, Stack, TextField } from '@mui/material';
import FormData from '../components/FormData';
import FormData1 from '../components/FormData1';

const Practice = () => {
  const [formData, setFormData] = useState([]);
  const [textData, settextData] = useState('');
  const [language, setLanguage] = useState('');

  const languages = ['English', 'French', 'Turkish', 'German'];

  const textChangeHandler = (e, index) => {
    // * Add the item
    if (index === undefined) {
      console.log('indexoftoucedelement', index);
      settextData(e.target.value);
    }

    //* Edit the individual input item
    if (index !== undefined) {
      const item = formData[index];

      console.log('ddd', item);
      // const monthlyTimeSeries = Object.values(obj["Monthly Time Series"]);
      // setFormData((prev) => ({
      //   ...prev,
      //   textData: e.target.value,
      // }));
      setFormData([...formData, (item.textData = e.target.value)]);

      // console.log('eeeeeeeeeee', { textData: e.target.value });
      // const test = [...formData, item.textData];
      // console.log('testttt', test);
      // setFormData(formData => ({...formData, item.textData : e.target.value}))
      // const updated = (item.textData = e.target.value);
      // setFormData((formData) => ({ ...formData, formData[index].textData : e.target.value })
      // formData.map((item, indexx) => ({ ...item, textData: e.target.value }))
      // );
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

  const updateHandler = () => {};

  // useEffect(() => {
  //   const check = [...formData];
  //   console.log(check, 'fforrmmmcopy');
  // }, [formData]);

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
          console.log(index, 'ondexxxxx');
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
