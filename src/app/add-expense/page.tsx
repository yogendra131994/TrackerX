'use client';
import {
  Autocomplete,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  Button,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import expenseCategories from '../assets/data/expenseOptions';
import subCategoryOptions from '../assets/data/expenseSubCategoryOptions';
import paymentModes from '../assets/data/paymentModes';

const AddExpense: React.FC = () => {
  const [currentForm, setCurrentForm] = useState<'expense' | 'income'>(
    'expense',
  );
  const [subCategoryArray, setSubCategoryArray] = useState<any>([]);

  //selected values
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubCategory] = useState<string>('');
  const [selectedPaymentMode, setSelectedPaymentMode] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [date, setDate] = useState<Date | null>(null);

  function handleAutocompleteChange(
    event: SyntheticEvent<Element, Event>,
    value: string | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<string> | undefined,
  ): void {
    console.log('selected', value, expenseCategories.indexOf(value as string));
    setCategory(value as string);
    if (value) {
      const selectedSubCategories = subCategoryOptions[value];
      setSubCategoryArray(selectedSubCategories);
      console.log('array', selectedSubCategories);
    } else {
      setSubCategoryArray([]);
      console.log('array', []);
    }
  }

  function handleSubmitClick(event: any): void {
    if (!validateForm()) {
      // Form validation failed
      console.log('Please fill in all required fields.');
      return;
    }
    const formData = {
      description: description,
      category: category,
      selectedSubcategory: selectedSubcategory,
      selectedPaymentMode: selectedPaymentMode,
      amount: amount,
      date: date,
    };

    console.log(formData);
  }

  function validateForm(): boolean {
    return (
      !!description &&
      !!category &&
      !!selectedSubcategory &&
      !!selectedPaymentMode &&
      !!amount &&
      !!date
    );
  }

  return (
    <div className="flex flex-col justify-center h-screen px-[1rem] py-[2rem] lg:px-[15rem] md:px-[10rem]">
      <div className="flex w-full">
        <div
          className={`text-xxxl text-center w-1/2 py-2 rounded-tl-md cursor-pointer  ${currentForm === 'expense' ? 'bg-blue text-white' : 'text-blue'}`}
          onClick={() => {
            setCurrentForm('expense');
          }}
        >
          Expense
        </div>
        <div
          className={`text-xxxl text-center w-1/2 py-2 rounded-tr-md cursor-pointer ${currentForm === 'income' ? 'bg-blue text-white' : 'text-blue'}`}
          onClick={() => {
            setCurrentForm('income');
          }}
        >
          Income
        </div>
      </div>

      <div
        className={`flex-1 h-full w-full border rounded-b-md p-4 lg:px-8 overflow-auto ${currentForm === 'income' ? 'rounded-l-md' : 'rounded-r-md'} border-blue overflow-auto`}
      >
        {currentForm === 'expense' && (
          <div className="flex flex-col gap-8 overflow-auto">
            <div className="flex flex-col gap-2">
              <div className="text-lg font-medium text-mediumgray">
                Description
              </div>
              <TextField
                id="filled-number"
                type="search"
                placeholder="Add description..."
                hiddenLabel
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setDescription(event.target.value);
                }}
                InputLabelProps={{
                  shrink: false,
                }}
                InputProps={{
                  disableUnderline: true,
                  style: {},
                }}
                size="small"
                fullWidth
                variant="filled"
                sx={{
                  '.MuiFilledInput-input': {
                    background: 'white',
                    borderRadius: '4px',
                    fontSize: 16,
                  },

                  '&:focus-within': {
                    '.MuiFilledInput-input': {
                      background: 'white',
                      borderRadius: '4px',
                      fontSize: 16,
                    },
                    border: '1px solid #55acee',
                  },
                  border: '1px solid #ccd6dd',
                  borderRadius: '4px', // Add border radius to TextField
                }}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="text-lg font-medium text-mediumgray">
                  Category<span className="text-blue"> *</span>
                </div>
                <Autocomplete
                  id="combo-box-demo"
                  options={expenseCategories}
                  fullWidth
                  onChange={handleAutocompleteChange}
                  sx={{
                    '.MuiInput-underline:after': {
                      borderBottom: 'none', // Remove underline
                    },

                    '.MuiFilledInput-root': {
                      background: 'white',
                      borderColor: '#ccd6dd',
                      borderWidth: 1,
                      fontSize: 16,
                      borderRadius: '4px',
                    },
                    '&:focus-within': {
                      '.MuiFilledInput-root': {
                        background: 'white',
                        borderColor: '#55acee',
                        borderWidth: 1,
                        fontSize: 16,
                        borderRadius: '4px',
                      },
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
                      placeholder="Select category"
                      variant="filled"
                    />
                  )}
                />
              </div>
              {subCategoryArray.length !== 0 && (
                <div className="flex flex-col gap-2">
                  <div className="text-lg font-medium text-mediumgray">
                    Subcategory<span className="text-blue"> *</span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {subCategoryArray.map((value: string, index: number) => {
                      return (
                        <div
                          key={index}
                          className={`border rounded-md px-2 py-1 cursor-pointer text-[14px] ${selectedSubcategory !== value ? ' border-blue   text-blue' : 'bg-blue text-white'}`}
                          onClick={() => {
                            setSelectedSubCategory(value);
                            console.log(selectedSubcategory);
                          }}
                        >
                          {value}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-lg font-medium text-mediumgray">
                Mode of payment<span className="text-blue"> *</span>
              </div>
              <div className="flex flex-wrap gap-4 ">
                {paymentModes.map((value: string, index: number) => {
                  return (
                    <div
                      key={index}
                      className={`flex shrink-0 border rounded-md px-2 py-1 cursor-pointer text-[14px] ${selectedPaymentMode !== value ? ' border-blue   text-blue' : 'bg-blue text-white'}`}
                      onClick={() => {
                        setSelectedPaymentMode(value);
                        console.log(selectedPaymentMode);
                      }}
                    >
                      {value}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-lg font-medium text-mediumgray">Amount</div>
              <div className="flex items-center gap-4">
                <div className="text-[2rem] text-mediumgray">₹</div>
                <div className="flex flex-col w-full">
                  <TextField
                    id="filled-number"
                    type="number"
                    placeholder="Amount"
                    hiddenLabel
                    value={amount}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      // const formattedValue = formatIndianRupees(event.target.value);
                      setAmount(event.target.value);
                    }}
                    InputProps={{
                      disableUnderline: true,
                      style: {},
                    }}
                    size="small"
                    fullWidth
                    variant="filled"
                    sx={{
                      '.MuiFilledInput-input': {
                        background: 'white',
                        borderRadius: '4px',
                        fontSize: 20,
                        fontWeight: 500,
                      },
                      '&::placeholder': {
                        fontSize: 16,
                      },

                      '&:focus-within': {
                        border: '1px solid #55acee',
                        '.MuiFilledInput-input': {
                          background: 'white',
                          borderRadius: '4px',
                          fontSize: 20,
                          fontWeight: 500,
                        },
                      },
                      border: '1px solid #ccd6dd',
                      borderRadius: '4px',
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-lg font-medium text-mediumgray">Date</div>
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    onChange={(date: Date | null) => {
                      setDate(date);
                    }}
                    sx={{
                      width: '100%',
                      '.MuiInputLabel-root': {
                        fontSize: 16,
                        color: '#66757f',
                      },
                      '.MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#55acee',
                          borderWidth: 1,
                        },
                      },
                      '.MuiInputBase-input': {
                        fontSize: 16,
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <Button
                variant="contained"
                disableElevation
                size="large"
                style={{ backgroundColor: '#55acee', textTransform: 'none' }}
                onClick={handleSubmitClick}
              >
                Add expense
              </Button>
            </div>
          </div>
        )}

        {currentForm === 'income' && (
          <div className="flex flex-col gap-4 overflow-auto"></div>
        )}
      </div>
    </div>
  );
};

export default AddExpense;
