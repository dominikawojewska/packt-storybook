import type { CSSProperties } from 'react';
import './buttonCounter.css';

export interface ButtonCounterProps {
  label: string;
  onClick?: () => void;
  size?: string;
  version?: number;
  backgroundColor?: CSSProperties['backgroundColor'];
}
export const ButtonCounter: React.FC<ButtonCounterProps> = ({ label, onClick, size, version, backgroundColor }) => {
  return (
    <button 
        onClick={onClick} 
        className={`counter-button ${version ? `counter-button-${version}` : ''} counter-button--${size}`} 
        style={ backgroundColor && { backgroundColor } }>
      {label}
    </button>
  )
}
