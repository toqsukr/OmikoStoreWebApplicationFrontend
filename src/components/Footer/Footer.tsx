import { ReactSVG } from 'react-svg';
import css from './Footer.module.css';
import { footer } from '../../utils/data';

export default function Footer() {
  return (
    <div id={css.footerContainer}>
      <div id={css.contentContainer}>
        <div id={css.descriptionContainer}>
          <p className={css.footerText}>{footer.description}</p>
        </div>
        <div id={css.productByContainer}>
          <div id={css.nicknameContainer}>
            <a
              className={css.footerText}
              href='https://github.com/toqsukr'
              target='_blank'
            >
              toqsukr
            </a>
            <a
              className={css.footerText}
              href='https://github.com/skeesh24'
              target='_blank'
            >
              skeesh24
            </a>
          </div>
          <ReactSVG src='icons/github.svg' />
        </div>
      </div>
    </div>
  );
}
