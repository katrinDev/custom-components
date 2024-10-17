import classNames from 'classnames';
import { ChangeEvent, FC, useState } from 'react';
import styles from './Input.module.scss';

//extends InputAttributes
export interface InputProps {
  label?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  size?: 'medium' | 'small';
  color?: 'primary' | 'secondary';
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
}
//forwardRef
const Input: FC<InputProps> = ({
  label = 'Default Input',
  size = 'medium',
  helperText,
  error = false,
  color = 'primary',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const getClassNames = () => {
    return classNames(styles['custom-input'], {
      [styles.medium]: size === 'medium',
      [styles.small]: size === 'small',
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
          className={getClassNames()}
          placeholder={isFocused ? (error ? 'Fix an issue...' : 'Your text...') : ''}
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
};

export default Input;
