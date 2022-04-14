import { FC } from 'react';
import clsx from 'clsx';

type Props = {
  disabled?: boolean;
};

const Button: FC<Props> = ({ disabled = false, children, ...restProps }) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        'px-4 py-2 leading-5 font-medium hover:bg-orange-500 text-gray-50 bg-gray-600 select-none focus:outline-none focus:shadow-outline',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
