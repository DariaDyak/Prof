import React, { useEffect, useRef } from 'react';

interface NoOutlineButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const NoOutlineButton: React.FC<NoOutlineButtonProps> = ({ children, ...props }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleFocus = () => {
      button.style.outline = 'none';
      button.style.boxShadow = 'none';
      button.style.setProperty('outline', 'none', 'important');
      button.style.setProperty('box-shadow', 'none', 'important');
    };

    const handleMouseDown = () => {
      button.style.outline = 'none';
      button.style.boxShadow = 'none';
    };

    button.addEventListener('focus', handleFocus);
    button.addEventListener('mousedown', handleMouseDown);
    button.addEventListener('touchstart', handleMouseDown);

    button.style.outline = 'none';
    button.style.boxShadow = 'none';

    return () => {
      button.removeEventListener('focus', handleFocus);
      button.removeEventListener('mousedown', handleMouseDown);
      button.removeEventListener('touchstart', handleMouseDown);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      {...props}
      className={`${props.className || ''} outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0`}
      style={{
        outline: 'none',
        boxShadow: 'none',
        ...props.style
      }}
    >
      {children}
    </button>
  );
};