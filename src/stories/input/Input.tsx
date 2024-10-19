import classNames from 'classnames';
import { ChangeEvent, FC, forwardRef, InputHTMLAttributes, useState } from 'react';
import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  genSize?: 'medium' | 'small';
  color?: 'primary' | 'secondary';
  error?: boolean;
  helperText?: string;
}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label = 'Default Input',
      genSize = 'medium',
      helperText,
      error = false,
      color = 'primary',
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const getClassNames = () => {
      return classNames(styles['custom-input'], {
        [styles.medium]: genSize === 'medium',
        [styles.small]: genSize === 'small',
        [styles.error]: error,
        [styles.primary]: color === 'primary',
        [styles.secondary]: color === 'secondary',
      });
    };

    return (
      <>
        <div className={styles['input-container']}>
          <input
            type="text"
            id="custom-input"
            ref={ref}
            className={getClassNames()}
            placeholder={
              isFocused ? (error ? 'Fix an issue...' : 'Your text...') : ''
            }
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />

          <label
            htmlFor="custom-input"
            className={classNames(styles['input-label'], {
              [styles.error]: error,
            })}
          >
            {label}
          </label>
        </div>
        {helperText && (
          <p
            className={classNames(styles['helper-text'], {
              [styles.error]: error,
            })}
          >
            {helperText}
          </p>
        )}
      </>
    );
  },
);

export default Input;
