'use client';
import {
  Autocomplete,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  TextField,
} from '@mui/material';
import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
interface AutocompleteProps {
  value: string | null;
  setValue: Dispatch<SetStateAction<string | null>>;
  options: Array<string>;
  placeholder: string;
}
export default function AutocompleteComponent({
  value,
  setValue,
  options,
  placeholder,
}: AutocompleteProps) {
  function handleAutocompleteChange(
    event: SyntheticEvent<Element, Event>,
    value: string | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<string> | undefined,
  ): void {
    setValue(value);
    console.log(value);
  }
  return (
    <div>
      <Autocomplete
        id="combo-box-demo"
        options={options}
        className=" cursor-pointer"
        fullWidth
        size="small"
        ListboxProps={{
          sx: { fontSize: 14 },
        }}
        onChange={handleAutocompleteChange}
        sx={{
          '.MuiInput-underline:after': {
            borderBottom: 'none', // Remove underline
          },

          '.MuiFilledInput-root': {
            background: 'white',
            borderColor: '#ccd6dd',
            borderWidth: 1,
            fontSize: 12,
            borderRadius: '4px',
          },
          '&:focus-within': {
            '.MuiFilledInput-root': {
              background: 'white',
              borderColor: '#55acee',
              borderWidth: 1,
              fontSize: 12,
              borderRadius: '4px',
            },
          },

          '.MuiAutocomplete-option': {
            fontSize: 14,
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            hiddenLabel
            InputProps={{
              ...params.InputProps,
              disableUnderline: true,
            }}
            placeholder={placeholder}
            variant="filled"
          />
        )}
      />
    </div>
  );
}
