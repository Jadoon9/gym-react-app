import React from 'react';
import { Autocomplete, Button, Paper, Stack, TextField } from '@mui/material';

const FormData = ({
  index,
  item,
  languages,
  textChangeHandler,
  languageChangeHandler,
  indexChangeHandler,
  editHandler,
}) => {
  return (
    <Paper
      key={index}
      variant='outlined'
      sx={{
        paddingInline: '4rem',
        paddingBlock: '5rem',
        marginTop: '1rem',
      }}
    >
      <Stack gap={2}>
        <Stack direction='row' spacing={2} alignItems='center'>
          <TextField
            fullWidth
            value={item?.textData}
            onClick={indexChangeHandler(index)}
            onChange={(e, index) => {
              editHandler(e);
              //   indexChangeHandler(index);
              textChangeHandler(e);
            }}
          />
          {index !== undefined && (
            <Button variant='outlined' size='large'>
              Update
            </Button>
          )}
        </Stack>
        <Autocomplete
          disablePortal
          id='combo-box-demo'
          value={item?.language}
          options={languages}
          sx={{ width: 300 }}
          onClick={indexChangeHandler(index)}
          onChange={(e, value, index) => {
            // indexChangeHandler(index);
            editHandler(value);
            languageChangeHandler(value);
          }}
          renderInput={(params) => <TextField {...params} label='Movie' />}
        />
      </Stack>
    </Paper>
  );
};

export default FormData;
