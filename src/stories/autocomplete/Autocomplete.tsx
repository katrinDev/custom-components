import { FC, forwardRef, useDeferredValue, useEffect, useState } from 'react';
import { InputHTMLAttributes } from 'react';

import inputStyles from '../input/Input.module.scss';
import styles from './Autocomplete.module.scss';
import classNames from 'classnames';

type Option = {
  label: string;
  id: number;
};

export type AutocompleteProps = InputHTMLAttributes<HTMLInputElement> & {
  options: Option[];
  color?: 'primary' | 'secondary';
  label?: string;
};

const Autocomplete: FC<AutocompleteProps> = forwardRef<
  HTMLInputElement,
  AutocompleteProps
>(({ options, color = 'primary', label = 'Autocomplete', ...props }, ref) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const defferedValue = useDeferredValue(value);
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);

  const getInputClassNames = () => {
    return classNames(inputStyles['custom-input'], inputStyles['medium'], {
      [inputStyles.primary]: color === 'primary',
      [inputStyles.secondary]: color === 'secondary',
    });
  };

  const onOptionSelected = (option: string) => {
    console.log('heekjfnv');
    console.log(option);
    setValue(option);
    // setIsFocused(false);
  };

  useEffect(() => {
    console.log(isFocused);
  }, [isFocused]);

  useEffect(() => {
    setFilteredOptions(options.filter((opt) => opt.label.includes(value)));
  }, [defferedValue]);

  return (
    <div
      className={styles['autocomplete-container']}
      onFocus={() => setIsFocused(true)}
      onMouseUp={() => setIsFocused(false)}
    >
      <div className={inputStyles['input-container']}>
        <input
          type="text"
          id="autocomplete-input"
          ref={ref}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={isFocused ? 'Choose an option' : ''}
          className={getInputClassNames()}
          {...props}
        />

        <label htmlFor="autocomplete-input" className={inputStyles['input-label']}>
          {label}
        </label>
      </div>
      {isFocused && (
        <div className={styles['options-block']}>
          {filteredOptions.map((opt) => (
            <p className={styles['autocomplete-item']} key={opt.id}>
              {opt.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
});

export default Autocomplete;
