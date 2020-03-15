import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-angular-input-number',
  templateUrl: './angular-input-number.html',
  styleUrls: ['./angular-input-number.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AngularInputNumberComponent),
    multi: true,
  }]
})
export class AngularInputNumberComponent implements OnInit, ControlValueAccessor
{
  @Input() min: number;
  @Input() max: number;
  step: number;
  precision: number;
  disabled: boolean;
  _value: number = 0;

  private propagateChange = (_: any) => { };

  onChange(event)
  {
    this.propagateChange(this._value);
  }

  onKeyDown(event)
  {
    const pattern = new RegExp('[0-9]|\\*')

    if (!pattern.test(event.key) && event.key !== "Backspace" && event.key !== "Delete")
    {
      event.preventDefault();
    }
  }

  onKyUp(event)
  {
    this._value = event.currentTarget.valueAsNumber;
    this.propagateChange(event.currentTarget.valueAsNumber);
  }

  registerOnChange(fn: any)
  {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any)
  {

  }

  writeValue(val: any)
  {
    this._value = val;
  }

  setDisabledState(val: boolean)
  {
    if (this.disabled == null)
    {
      this.disabled = false;
    }
  }

  ngOnInit()
  {

  }

  increaseValue(): void
  {
    if (this.max !== undefined && this._value >= this.max)
    {
      return;
    }

    this._value += 1;
    this.onChange(this._value);
  }

  decreaseValue(): void
  {
    if (this.min !== undefined && this._value <= this.min)
    {
      return;
    }

    this._value -= 1;
    this.onChange(this._value);
  }

  get value()
  {
    return this._value;
  }

  set value(val)
  {
    this._value = val;
    this.onChange(val);
  }
}
