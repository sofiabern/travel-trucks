import Flatpickr from "react-flatpickr";
import { Options } from "flatpickr/dist/types/options";
import { FieldProps } from "formik";
import "flatpickr/dist/themes/material_red.css";
import s from './DatePicker.module.css'
interface DatePickerProps extends FieldProps {
  options?: Options;
}

const DatePicker = ({ field, form, options, ...props }: DatePickerProps) => {
  const { setFieldValue } = form;

  const handleDateChange = (selectedDates: Date[]) => {
    setFieldValue(field.name, selectedDates);
  };

  return (
      <Flatpickr
        {...field}
        {...props}
        options={{
          ...options,
          onOpen: () => {
            const flatpickrInput = document.querySelector('.flatpickr-days') as HTMLInputElement;
            flatpickrInput?.focus();
          },
        }}
        onChange={handleDateChange}
        value={field.value || []}
        placeholder="Booking Dates*"
        className={s['date-picker']}
        
      />
  );
};

export default DatePicker;