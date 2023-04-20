import { useEffect, useState } from 'react';

type Props = {
  count: number;
  duration?: number;
};

const CountUp: React.FC<Props> = ({ count, duration = 2000 }) => {
  const [currentValue, setCurrentValue] = useState<number>(0);

  useEffect(() => {
    const increment = count / duration;
    let timer: NodeJS.Timeout | null = null;
    let lastTimestamp: number | null = null;

    const updateValue = (timestamp: number) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      const newValue = currentValue + increment * elapsed;
      if (newValue >= count) {
        setCurrentValue(count);
        if (timer) {
          clearInterval(timer);
        }
      } else if ((count - newValue) <= increment) {
        const remaining = count - newValue;
        const easingIncrement = remaining / (duration / remaining);
        setCurrentValue(newValue + easingIncrement);
      } else {
        setCurrentValue(newValue);
      }
    };

    timer = setInterval(() => {
      window.requestAnimationFrame(updateValue);
    }, 1);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [count, duration]);

  return (
    <div>{Math.ceil(currentValue)}</div>
  );
};

export default CountUp;