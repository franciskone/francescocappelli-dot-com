export interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

export const Button = ({ text, disabled = false, onClick }: ButtonProps) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
    disabled={disabled}
    onClick={onClick}
  >
    {text}
  </button>
);
