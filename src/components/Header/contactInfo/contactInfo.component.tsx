import { FC, useRef } from 'react';
import { animated, useTransition } from 'react-spring';

import { useLocation } from '@hooks/useLocation';
import { useLockFirstAnimation } from '@hooks/useLockFirstAnimation.hook';
import css from './ContactInfo.module.css';
import { contactAnimation } from './contactInfo.animation';

const ContactInfo: FC = () => {
  const { location } = useLocation();
  const { immediate } = useLockFirstAnimation();
  const phoneNumberRef = useRef({
    phoneNumber: location.phoneNumbers[0],
    description: location.description
  });

  const numberTransition = useTransition(location, {
    ...contactAnimation,
    immediate,
    onRest: () =>
      (phoneNumberRef.current = {
        phoneNumber: location.phoneNumbers[0],
        description: location.description
      })
  });
  return (
    <div className={css.infoContainer}>
      {numberTransition(style => (
        <>
          <>
            <animated.p
              style={{ opacity: style.opacity, transform: style.transform }}
              id={css.mainPhoneNumber}
            >
              {phoneNumberRef.current.phoneNumber}
            </animated.p>
            <animated.p style={{ opacity: style.opacity, scale: style.scale }} id={css.phoneNumberInfo}>
              {phoneNumberRef.current.description}
            </animated.p>
          </>
        </>
      ))}
    </div>
  );
};

export default ContactInfo;
