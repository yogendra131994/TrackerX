'use client';
import {
  Autocomplete,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  TextField,
} from '@mui/material';
import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
interface AutocompleteProps {
  options: Array<string>;
  placeholder: string;
  filterState: FilterState;
  setFilterState: Dispatch<SetStateAction<any>>;
}
export default function AutocompleteComponent({
  options,
  placeholder,
  filterState,
  setFilterState,
}: AutocompleteProps) {
  function handleAutocompleteChange(
    event: SyntheticEvent<Element, Event>,
    value: string | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<string> | undefined,
  ): void {
    setFilterState((prevState: any) => ({
      ...prevState,
      [placeholder === 'Category' ? 'category' : 'paymentMode']: value,
    }));
  }

  const value =
    placeholder === 'Category'
      ? filterState?.category
      : filterState?.paymentMode;
  return (
    <div className="lg:w-[120px] w-full">
      <Autocomplete
        value={value}
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
          width: '100%',
          '.MuiInput-underline:after': {
            borderBottom: 'none', // Remove underline
          },
          '.MuiSvgIcon-root': {
            fontSize: 20,
          },

          '.MuiFilledInput-root': {
            background: 'white',
            borderColor: value ? '#55acee' : '#ccd6dd',
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
            fontSize: 12,
          },
          '.MuiInputBase-input': {
            height: 10,
          },
          '.MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: '0 !important',
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
