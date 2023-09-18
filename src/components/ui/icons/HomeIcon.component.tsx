import { FC } from 'react';
import { IIcon } from './icon/icon';
import Icon from './icon/icon.component';

const HomeIcon: FC<IIcon> = ({ filled, ...props }) => {
  return (
    <Icon>
      {filled ? (
        <svg
          {...props}
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5405 22.699C13.5407 22.2776 20.4596 22.2776 20.4595 22.699C20.4593 23.0538 20.4594 29.6797 20.4594 32.0185L20.4595 32.8127C20.4595 33.2341 26.0812 32.8127 27.3784 32.8127C28.6755 32.8127 29.5407 31.9699 29.5405 30.7057C29.5404 29.698 29.5405 24.139 29.5405 21.4975L29.5405 20.1706C29.5405 19.3278 33 20.1706 33 19.3278L33 15.9565C33 14.6923 18.8854 1.4955 18.2973 1.2074C17.7092 0.919286 16.1545 0.942697 15.7027 1.2074C15.2509 1.47209 1.00004 14.6923 1.00002 15.9565L1 19.3278C1 20.1706 4.45946 19.3278 4.45946 20.1706L4.45947 30.7057C4.45949 31.9699 5.75692 32.8127 6.62163 32.8127C7.48635 32.8127 13.5405 33.2341 13.5405 32.8127L13.5405 32.0185V31.9095C13.5405 29.4808 13.5404 23.0484 13.5405 22.699Z"
            fill="#D9D9D9"
          />
          <path
            d="M13.5405 32.8127C13.5405 33.2341 7.48635 32.8127 6.62163 32.8127C5.75692 32.8127 4.45949 31.9699 4.45947 30.7057M13.5405 32.8127L13.5405 32.0185M13.5405 32.8127C13.5405 32.746 13.5405 32.458 13.5405 32.0185M20.4595 32.8127C20.4595 33.2341 26.0812 32.8127 27.3784 32.8127C28.6755 32.8127 29.5407 31.9699 29.5405 30.7057C29.5404 29.698 29.5405 24.139 29.5405 21.4975M20.4595 32.8127L20.4594 32.0185M20.4595 32.8127C20.4595 32.746 20.4595 32.458 20.4594 32.0185M29.5405 20.1706C29.5405 19.3278 33 20.1706 33 19.3278M29.5405 20.1706L29.5405 21.4975M29.5405 20.1706C29.5405 20.3416 29.5405 20.825 29.5405 21.4975M33 19.3278C32.9999 18.485 33 17.2208 33 15.9565M33 19.3278L33 15.9565M33 15.9565C33 14.6923 18.8854 1.4955 18.2973 1.2074C17.7092 0.919286 16.1545 0.942697 15.7027 1.2074C15.2509 1.47209 1.00004 14.6923 1.00002 15.9565M1.00002 15.9565C1 17.2207 1 18.485 1 19.3278M1.00002 15.9565L1 19.3278M1 19.3278C1 20.1706 4.45946 19.3278 4.45946 20.1706M4.45946 20.1706C4.45946 21.0134 4.45946 29.4415 4.45947 30.7057M4.45946 20.1706L4.45947 30.7057M13.5405 32.0185V31.9095M13.5405 32.0185C13.5405 31.9831 13.5405 31.9468 13.5405 31.9095M20.4594 32.0185C20.4594 29.6797 20.4593 23.0538 20.4595 22.699C20.4596 22.2776 13.5407 22.2776 13.5405 22.699C13.5404 23.0484 13.5405 29.4808 13.5405 31.9095"
            stroke="black"
          />
        </svg>
      ) : (
        <svg
          {...props}
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5405 32.8127C13.5405 33.2341 7.48635 32.8127 6.62163 32.8127C5.75692 32.8127 4.45949 31.9699 4.45947 30.7057M13.5405 32.8127L13.5405 32.0185M13.5405 32.8127C13.5405 32.746 13.5405 32.458 13.5405 32.0185M20.4595 32.8127C20.4595 33.2341 26.0812 32.8127 27.3784 32.8127C28.6755 32.8127 29.5407 31.9699 29.5405 30.7057C29.5404 29.698 29.5405 24.139 29.5405 21.4975M20.4595 32.8127L20.4594 32.0185M20.4595 32.8127C20.4595 32.746 20.4595 32.458 20.4594 32.0185M29.5405 20.1706C29.5405 19.3278 33 20.1706 33 19.3278M29.5405 20.1706L29.5405 21.4975M29.5405 20.1706C29.5405 20.3416 29.5405 20.825 29.5405 21.4975M33 19.3278C32.9999 18.485 33 17.2208 33 15.9565M33 19.3278L33 15.9565M33 15.9565C33 14.6923 18.8854 1.4955 18.2973 1.2074C17.7092 0.919286 16.1545 0.942697 15.7027 1.2074C15.2509 1.47209 1.00004 14.6923 1.00002 15.9565M1.00002 15.9565C1 17.2207 1 18.485 1 19.3278M1.00002 15.9565L1 19.3278M1 19.3278C1 20.1706 4.45946 19.3278 4.45946 20.1706M4.45946 20.1706C4.45946 21.0134 4.45946 29.4415 4.45947 30.7057M4.45946 20.1706L4.45947 30.7057M13.5405 32.0185C13.5405 29.6797 13.5404 23.0538 13.5405 22.699C13.5407 22.2776 20.4596 22.2776 20.4595 22.699C20.4593 23.0538 20.4594 29.6797 20.4594 32.0185"
            stroke="black"
          />
        </svg>
      )}
    </Icon>
  );
};

export default HomeIcon;
