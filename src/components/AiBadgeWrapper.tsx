import React from 'react';

interface AiBadgeWrapperProps {
  children: React.ReactNode;
  className?: string;
  badgePosition?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

export const AiBadgeWrapper: React.FC<AiBadgeWrapperProps> = ({
  children,
  className = "relative inline-block w-full h-full",
  badgePosition = 'bottom-right'
}) => {
  const positionClasses = {
    'bottom-right': 'bottom-3 right-3',
    'bottom-left': 'bottom-3 left-3',
    'top-right': 'top-3 right-3',
    'top-left': 'top-3 left-3'
  };

  return (
    <div className={className}>
      {children}
      <span className={`absolute ${positionClasses[badgePosition]} z-10 bg-black/60 backdrop-blur-[2px] border border-white/10 text-[10px] text-white/70 px-2.5 py-0.5 rounded-sm select-none pointer-events-none tracking-wider font-light`}>
        A.I 생성으로 만든 이미지입니다
      </span>
    </div>
  );
};

export default AiBadgeWrapper;
