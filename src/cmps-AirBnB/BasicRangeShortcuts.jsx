import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';

export function BasicRangeShortcuts({onCheckInPick, onCheckOutPick}) {
  const [value, setValue] = React.useState([null, null]);

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    if (value[0] && value[1]) {
      onCheckInPick(value[0]?.format('DD/MM/YYYY'))
      onCheckOutPick(value[1]?.format('DD/MM/YYYY'))
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
