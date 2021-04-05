import classnames from 'classnames';
import { Colors } from '../types';

export interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick: () => void;
  color: Colors;
}

export const Button = ({
  text,
  disabled = false,
  onClick,
  color = Colors.primary,
}: ButtonProps) => {
  const useTextWhiteColor = [Colors.white, Colors.transparent].includes(color);
  const textColor = useTextWhiteColor ? 'black' : 'white';
  const buttonStyle = classnames(
    { 'border border-black': useTextWhiteColor },
    `bg-${color} text-${textColor} shadow-md font-bold py-2 px-4 rounded`,
    { 'opacity-50 cursor-not-allowed': disabled }
  );

  return (
    <button className={buttonStyle} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};
