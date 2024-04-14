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
import { RotatingLines } from 'react-loader-spinner';
import expenseCategories from '../../../assets/data/expenseOptions';
import subCategoryOptions from '../../../assets/data/expenseSubCategoryOptions';
import paymentModes from '../../../assets/data/paymentModes';

const AddExpense: React.FC = () => {
  const [subCategoryArray, setSubCategoryArray] = useState<any>([]);

  //selected values
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubCategory] = useState<string>('');
  const [selectedPaymentMode, setSelectedPaymentMode] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [showLoader, setShowLoader] = useState<boolean>(false);

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

  async function handleSubmitClick(event: any) {
    if (!validateForm()) {
      // Form validation failed
      console.log('Please fill in all required fields.');
      return;
    }
    setShowLoader(true);

    const formData = new FormData();
    console.log(date);

    formData.append('description', description);
    formData.append('category', category);
    formData.append('subcategory', selectedSubcategory);
    formData.append('modeofpayment', selectedPaymentMode);
    formData.append('email', 'yogendra.pawar@spit.ac.in');
    formData.append('amount', amount);
    formData.append('date', date.toISOString());

    // Format the date to DateTime format (YYYY-MM-DDTHH:mm:ss)
    const requestOptions = {
      method: 'POST',
      body: formData,
    }; // Explicitly specify the type as RequestInit

    try {
      const response = await fetch(
        'http://localhost:3000/api/addExpense',
        requestOptions,
      );
      if (!response.ok) {
        throw new Error('Failed to add expense');
      }
      const responseData = await response.json();
      console.log(responseData);
      setShowLoader(false);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  function validateForm(): boolean {
    return (
      !!description &&
      !!category &&
      !!selectedSubcategory &&
      !!selectedPaymentMode &&
      !!amount
    );
  }
  console.log('reloaded');

  return (
    <div className="flex flex-col h-full px-[1rem] py-[1rem] md:px-[10rem] lg:px-[15rem]">
      <div
        className={` w-full border rounded-md p-4 lg:px-8 overflow-auto bg-white border-blue`}
      >
        <div className="flex flex-col gap-6 overflow-auto">
          <div className="flex flex-col gap-2">
            <div className="text-14 font-medium text-mediumgray">
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
                  fontSize: 12,
                  height: '12px',
                },

                '&:focus-within': {
                  '.MuiFilledInput-input': {
                    background: 'white',
                    borderRadius: '4px',
                    fontSize: 12,
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
              <div className="text-14 font-medium text-mediumgray">
                Category<span className="text-blue"> *</span>
              </div>
              <Autocomplete
                id="combo-box-demo"
                options={expenseCategories}
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
                    borderColor: category ? '#55acee' : '#ccd6dd',
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
                    placeholder="Select category"
                    variant="filled"
                  />
                )}
              />
            </div>
            {subCategoryArray.length !== 0 && (
              <div className="flex flex-col gap-2">
                <div className="text-14 font-medium text-mediumgray">
                  Subcategory<span className="text-blue"> *</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  {subCategoryArray.map((value: string, index: number) => {
                    return (
                      <div
                        key={index}
                        className={`border rounded-sm px-2 py-1 cursor-pointer text-[12px] ${selectedSubcategory !== value ? ' border-blue   text-blue' : 'bg-blue text-white'}`}
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
            <div className="text-14 font-medium text-mediumgray">
              Mode of payment<span className="text-blue"> *</span>
            </div>
            <div className="flex flex-wrap gap-4 ">
              {paymentModes.map((value: string, index: number) => {
                return (
                  <div
                    key={index}
                    className={`flex shrink-0 border rounded-sm px-2 py-1 cursor-pointer text-[12px] ${selectedPaymentMode !== value ? ' border-blue   text-blue' : 'bg-blue text-white'}`}
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
            <div className="text-14 font-medium text-mediumgray">
              Amount<span className="text-blue"> *</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-40 text-mediumgray">₹</div>
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
                      fontSize: 12,
                      fontWeight: 500,
                    },
                    '&::placeholder': {
                      fontSize: 12,
                    },
                    '.MuiAutocomplete-option': {
                      fontSize: 12,
                    },

                    '&:focus-within': {
                      border: '1px solid #55acee',
                      '.MuiFilledInput-input': {
                        background: 'white',
                        borderRadius: '4px',
                        fontSize: 12,
                        fontWeight: 500,
                      },
                    },
                    '.MuiInputBase-input': {
                      height: 10,
                    },
                    border: '1px solid #ccd6dd',
                    borderRadius: '4px',
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-14 font-medium text-mediumgray">Date</div>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  onChange={(date: Date | null) => {
                    setDate(date ?? new Date());
                  }}
                  slotProps={{ textField: { size: 'small' } }}
                  format="DD-MM-YYYY"
                  sx={{
                    width: '100%',

                    '.MuiInputLabel-root': {
                      fontSize: 12,
                      color: '#66757f',
                    },
                    '.MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#55acee',
                        borderWidth: 1,
                      },
                    },
                    '.MuiInputBase-input': {
                      fontSize: 12,
                      height: 10,
                    },
                    '.MuiSvgIcon-root': {
                      fontSize: '16px', // Adjust the size as needed
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
              size="small"
              fullWidth
              type="submit"
              style={{ backgroundColor: '#55acee', textTransform: 'none' }}
              onClick={handleSubmitClick}
            >
              {showLoader ? (
                <RotatingLines
                  strokeColor={'white'}
                  width={'40'}
                  strokeWidth={'2'}
                  animationDuration={'0.75'}
                  ariaLabel={'rotating-lines-loading'}
                />
              ) : (
                <>Add expense</>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
