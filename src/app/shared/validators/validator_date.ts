import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const dateValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const validyDateControl = control.get('validyDate');
  const dateManufacturingControl = control.get('dateManufacturing');

  if (!validyDateControl || !dateManufacturingControl) {
    return null;
  }

  const validyDate = validyDateControl.value;
  const dateManufacturing = dateManufacturingControl.value;

  if (validyDate && dateManufacturing) {
    const validyDateParsed = new Date(validyDate);
    const dateManufacturingParsed = new Date(dateManufacturing);

    if (validyDateParsed > dateManufacturingParsed) {
      return { dateInvalid: true };
    }
  }

  return null;
};
