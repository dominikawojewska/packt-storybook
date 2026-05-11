import {useState} from 'react';
import {ButtonCounter} from './ButtonCounter';
import './counter.css';

export type CounterProps = {
    label?: string;
}

export const Counter: React.FC<CounterProps> = ({label}) => {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(prevCount => prevCount + 1);
    }
  return (
    <div className="counter-container" data-testid="counter-display">
        <p className="counter-value">{count}</p>
        <ButtonCounter 
            label={label || "Increment"} 
            onClick={handleCount} 
            size="large" 
            version={2} 
        />
    </div>
  )
}
