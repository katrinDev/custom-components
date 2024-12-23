import classNames from 'classnames';
import styles from './Button.module.scss';
import { ButtonHTMLAttributes, FC, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color = 'primary', size = 'medium', label, ...props }) => {
    return (
      <button
        type="button"
        className={classNames(styles['custom-button'], {
          [styles.medium]: size === 'medium',
          [styles.small]: size === 'small',
          [styles.large]: size === 'large',
          [styles.primary]: color === 'primary',
          [styles.secondary]: color === 'secondary',
        })}
        {...props}
      >
        {label}
      </button>
    );
  },
);
