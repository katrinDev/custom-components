import { FC, forwardRef, InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.scss';
import classNames from 'classnames';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  color?: 'secondary' | 'primary';
}

const CustomCheckbox: FC<CheckboxProps> = forwardRef<
  HTMLInputElement,
  CheckboxProps
>(({ label, color = 'primary', ...props }) => {
  return (
    <div className={styles['custom-checkbox']}>
      <input
        id="checkbox-input"
        type="checkbox"
        className={classNames(styles[`${color}`])}
        {...props}
      />
      <span className={styles['checkmark']}></span>
      <label htmlFor="checkbox-input">{label}</label>
    </div>
  );
});

export default CustomCheckbox;
