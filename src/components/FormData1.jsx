import React from 'react';
import { Autocomplete, Button, Paper, Stack, TextField } from '@mui/material';

const FormData = ({
  languages,
  language,
  textData,
  textChangeHandler,
  languageChangeHandler,
  editHandler,
}) => {
  return (
    <Paper
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
            value={textData}
            onChange={(e) => {
              textChangeHandler(e);
            }}
          />
        </Stack>
        <Autocomplete
          disablePortal
          id='combo-box-demo'
          value={language}
          options={languages}
          sx={{ width: 300 }}
          onChange={(e, value) => {
            // indexChangeHandler(index)
            languageChangeHandler(value);
          }}
          renderInput={(params) => <TextField {...params} label='Movie' />}
        />
      </Stack>
    </Paper>
  );
};

export default FormData;
