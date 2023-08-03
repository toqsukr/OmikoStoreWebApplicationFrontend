import GlyfContainer from '../GlyfContainer/GlyfContainer';
import { advantageGlyfs } from '../../utils/data';
import { ReactSVG } from 'react-svg';
import Glyf from '../Glyf/Glyf';
import css from './AdvantageSection.module.css';

export default function AdvantageSection() {
  return (
    <GlyfContainer style={css.advantage}>
      <div className={css.titleContainer}>
        <h1 id={css.titleText}>Преимущества</h1>
      </div>
      <div className={css.glyfContainer}>
        {advantageGlyfs.map((gEl, gIndex: number) => (
          <Glyf key={gIndex}>
            <div className={css.descriptionContainer}>
              {gEl.description.map((pEl, pIndex) => (
                <div key={pIndex} id={css.textContainer}>
                  {gIndex === 1 && (
                    <div className={css.plusContainer}>
                      <ReactSVG src='icons/plus.svg' />
                    </div>
                  )}
                  <p key={pIndex} className={css.description}>
                    {pEl}
                  </p>
                </div>
              ))}
            </div>
          </Glyf>
        ))}
      </div>
    </GlyfContainer>
  );
}
