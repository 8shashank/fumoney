import { Slider as AntSlider } from 'antd';

export const Slider = ({ value, onChange, min = 0, max = 100, step = 1 }) => {
  return (
    <AntSlider max={max} min={min} onChange={onChange} value={value} step={step} />
  );
}