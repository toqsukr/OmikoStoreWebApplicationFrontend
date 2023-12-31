import { FC } from 'react';
import { IIcon } from './icon/icon';
import Icon from './icon/icon.component';

const SignIcon: FC<IIcon> = ({ strokeOpacity, ...props }) => {
  return (
    <Icon>
      <svg
        {...props}
        width="28"
        height="29"
        viewBox="0 0 28 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 14.5H18.5M18.5 14.5L13 10.5M18.5 14.5L13 18.5M14 1C14 1 22 1 23.5 1C25 1 26.5 2.5 26.5 4C26.5 5.5 26.5 23.5 26.5 25C26.5 26.5 25 28 23.5 28C22 28 14 28 14 28"
          stroke="black"
          strokeOpacity={strokeOpacity}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default SignIcon;
