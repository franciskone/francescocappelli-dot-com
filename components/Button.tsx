export interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

export const Button = ({ text, disabled = false, onClick }: ButtonProps) => (
  <button disabled={disabled} onClick={onClick}>
    {text}
  </button>
);
