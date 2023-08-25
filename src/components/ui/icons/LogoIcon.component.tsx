import { FC } from 'react';
import Icon from './icon/icon.component';
import { IIcon } from './icon/icon';

const LogoIcon: FC<IIcon> = ({ ...props }) => {
  return (
    <Icon>
      <svg
        {...props}
        width="292"
        height="64"
        viewBox="0 0 292 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M180.414 14.0629C181.467 14.0629 182.32 14.9225 182.32 15.9829C182.32 17.0433 181.467 17.9029 180.414 17.9029C179.362 17.9029 178.509 17.0433 178.509 15.9829C178.509 14.9225 179.362 14.0629 180.414 14.0629Z"
          fill="black"
        />
        <path
          d="M19.6278 49.04C19.8312 49.0434 20.029 49.0488 20.2214 49.0562C20.0307 49.0555 19.8329 49.05 19.6278 49.04Z"
          fill="black"
        />
        <path
          d="M261.167 39.7265L261.127 39.7672M126.976 48.1419C122.212 45.7419 117.86 42.8637 115.097 36.1819C112.334 29.5 112.693 23.2472 115.097 15.9829C117.5 8.7185 122.5 4.00879 125.5 3.00003C128.5 1.99127 129.5 1.99126 132 1.99127M130.359 54.9018C130.359 56.3418 137.505 56.3418 143.222 53.4618C148.939 50.5818 151.321 48.6618 153.704 46.7418C156.086 44.8218 159.897 40.5018 161.31 38.5818C162.723 36.6618 165.138 33.7818 166.567 30.3828C167.996 26.9839 168.949 24.1818 169.426 20.3418C169.656 18.4856 170.379 15.5028 169.902 11.2218C169.426 6.94081 167.353 4.03778 165.138 3.54183C160.85 2.58183 159.094 8.13995 161 11.5C161.777 12.8705 163.232 15.5418 167.044 16.5018C170.855 17.4618 173.697 17.4229 173.697 17.4229M130.359 54.9018C130.359 54.1747 138.09 51.3835 142 45.2628C145.834 39.2621 146.529 34.7656 146.764 30.3828C147 26.0001 146.46 19.4948 145.588 15.5028C144.716 11.5109 142.227 5.51233 137.965 3.50277C135.851 2.50548 134.5 1.99128 132 1.99127M130.359 54.9018C133.407 52.6237 136.389 51.8386 139.722 46.2618C143.056 40.685 143.756 35.7637 144.378 31.3818C145 27 144.5 22 143.5 16.5C142.5 11 140 1.99128 132 1.99127M2 37.52C2 37.52 7.2407 56.24 8.66998 56.24C10.0993 56.24 14.8635 37.52 14.8635 37.52M171.315 37.52V46.16M171.315 56.24V46.16M171.315 46.16C177.316 46.2599 181.32 50.96 181.32 56.24M171.315 46.16C175.422 46.3605 179.414 41.84 181.32 37.52M31.5385 43.28C31.5385 47.029 31.6576 51.44 32.0149 52.88C32.3722 54.32 33.4442 56.24 35.8263 56.24C38.2084 56.24 39.2804 54.32 39.6377 52.88C39.995 51.44 40.1141 43.28 40.1141 43.28M210.675 43.28C210.675 43.28 203.529 43.28 202.576 43.76C201.623 44.24 201.146 44.9026 201.146 46.16C201.146 47.4175 201.623 48.08 202.576 48.56C203.529 49.04 207.816 50.48 208.769 50.96C209.722 51.44 210.199 52.1026 210.199 53.36C210.199 54.6175 209.722 55.28 208.769 55.76C207.816 56.24 200.67 56.24 200.67 56.24M59.1712 56.24C59.1712 56.24 58.6948 49.04 59.1712 47.12C59.6476 45.2 61.2217 43.3971 63.4591 43.28C65.8385 43.1555 67.7469 45.2 68.2233 47.12C68.6998 49.04 68.2233 56.24 68.2233 56.24M89.1861 43.28C89.1861 43.28 88.7097 50.48 89.6625 52.88C90.6154 55.28 93.4739 56.24 93.4739 56.24M93.4739 56.24C93.4739 56.24 96.4389 55.28 97.2854 52.88C98.1319 50.48 97.7618 43.28 97.7618 43.28M93.4739 56.24V62M289.285 52.4C290.238 50.96 290.238 48.56 289.285 46.64C288.333 44.72 286.573 43.1629 284.045 43.28C281.665 43.3903 280.233 44.72 279.28 46.64C278.328 48.56 278.328 50.96 279.28 52.4C280.233 53.84 281.776 55.1794 284.045 55.28C286.468 55.3875 288.333 53.84 289.285 52.4ZM289.285 52.4L289.762 56.24M266.893 37.52V49.04M266.893 49.04V56.24M266.893 49.04C267.097 49.0434 267.295 49.0488 267.487 49.0562M266.893 49.04C267.098 49.0501 267.296 49.0555 267.487 49.0562M267.487 49.0562C272.97 49.2672 274.04 51.139 274.04 56.24M267.487 49.0562C271.115 49.0699 272.229 47.3843 274.04 43.28M83.9454 52.4C84.8983 50.96 84.8983 48.56 83.9454 46.64C82.9926 44.72 81.2327 43.1629 78.7047 43.28C76.3246 43.3903 74.8933 44.72 73.9404 46.64C72.9876 48.56 72.9876 50.96 73.9404 52.4C74.8933 53.84 76.4358 55.1794 78.7047 55.28C81.1282 55.3875 82.9926 53.84 83.9454 52.4ZM83.9454 52.4L84.4218 56.24M54.4069 43.28C54.4069 43.28 47.2605 43.28 46.3077 43.76C45.3548 44.24 44.8784 44.9026 44.8784 46.16C44.8784 47.4175 45.3548 48.08 46.3077 48.56C47.2605 49.04 51.5484 50.48 52.5012 50.96C53.4541 51.44 53.9305 52.1026 53.9305 53.36C53.9305 54.6175 53.4541 55.2801 52.5012 55.76C51.5484 56.24 44.402 56.24 44.402 56.24M214.963 56.24C214.963 56.24 214.486 47.6 214.963 46.16C215.439 44.72 216.914 43.28 218.774 43.28C220.635 43.28 222.065 44.3605 222.586 46.16M222.586 46.16C222.586 50.0965 222.586 56.24 222.586 56.24M222.586 46.16C223.107 44.3605 224.536 43.28 226.397 43.28C228.258 43.28 229.732 44.72 230.208 46.16C230.685 47.6 230.208 56.24 230.208 56.24M245.931 54.32C244.825 55.5731 242.352 56.1639 240.69 56.24C238.859 56.3238 236.878 55.76 235.926 54.32C234.973 52.88 235.061 52.3218 234.973 50.96C234.887 49.6374 235.263 48.0573 235.449 47.12M235.449 47.12C235.683 46.3155 235.926 45.68 236.878 44.72C237.65 43.9429 238.776 43.3638 240.69 43.28C242.768 43.189 243.763 43.4963 244.978 44.72C245.931 45.68 245.931 47.12 245.931 47.6C245.931 50.48 241.643 50.96 240.69 50.96C239.737 50.96 234.973 51.44 235.449 47.12ZM250.695 39.44V44.24M256.412 56.24C256.412 56.24 254.506 56.24 253.077 56.24C251.648 56.24 250.695 54.8 250.695 53.36C250.695 51.92 250.695 44.24 250.695 44.24M256.412 44.24H250.695M261.176 56.24V43.28M19.6278 37.52V49.04M19.6278 49.04V56.24M19.6278 49.04C19.8312 49.0434 20.029 49.0488 20.2214 49.0562M19.6278 49.04C19.8329 49.05 20.0307 49.0555 20.2214 49.0562M20.2214 49.0562C25.7047 49.2672 26.7742 51.139 26.7742 56.24M20.2214 49.0562C23.8499 49.0699 24.9637 47.3842 26.7742 43.28M113.484 52.4C114.437 50.96 114.437 48.56 113.484 46.64C112.531 44.72 110.771 43.1629 108.243 43.28C105.863 43.3903 104.432 44.72 103.479 46.64C102.526 48.56 102.526 50.96 103.479 52.4C104.432 53.84 105.974 55.1794 108.243 55.28C110.667 55.3875 112.531 53.84 113.484 52.4ZM113.484 52.4L113.96 56.24M180.414 14.0629C181.467 14.0629 182.32 14.9225 182.32 15.9829C182.32 17.0433 181.467 17.9029 180.414 17.9029C179.362 17.9029 178.509 17.0433 178.509 15.9829C178.509 14.9225 179.362 14.0629 180.414 14.0629ZM196.382 47.6C195.429 45.68 193.669 44.1229 191.141 44.24C188.761 44.3503 187.33 45.68 186.377 47.6C185.424 49.52 185.424 51.92 186.377 53.36C187.33 54.8 188.873 56.1394 191.141 56.24C193.565 56.3475 195.429 54.8 196.382 53.36C197.335 51.92 197.335 49.52 196.382 47.6Z"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default LogoIcon;