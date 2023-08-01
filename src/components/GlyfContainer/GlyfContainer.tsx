import { ReactNode } from 'react';
import classnames from 'classnames';
import css from './GlyfContainer.module.css';

interface IGlyfContainer {
  children: ReactNode;
  style: string;
}

export default function GlyfContainer({ children, style }: IGlyfContainer) {
  return (
    <div className={classnames({ [css.mainContainer]: true, [style]: style })}>
      {children}
    </div>
  );
}
