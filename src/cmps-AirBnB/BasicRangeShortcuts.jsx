import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { useEffect } from 'react';

export function BasicRangeShortcuts({onPickedDate,onCheckInPick, onCheckOutPick}) {
  const [value, setValue] = React.useState([null, null]);

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };




  /* useEffect(() => {
    if (value[0] && value[1]) {
      if (descriptionFormat) {
        const formatDate = (date) => {
          return new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(date);
        };
        onCheckInPick(formatDate(value[0]));
        onCheckOutPick(formatDate(value[1]));
        
      } else {
        onCheckInPick(value[0]?.format('DD/MM/YYYY'));
        onCheckOutPick(value[1]?.format('DD/MM/YYYY'));
      }
    }
  }, [value, descriptionFormat]); */


  useEffect(() => {
  if (value[0] && value[1]) {
    onPickedDate(value)
  }
}, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateRangePicker
        value={value}
        onChange={handleDateChange}
        slotProps={{
          actionBar: { actions: [] },
        }}
        calendars={2}
      />
    </LocalizationProvider>
  );
}
