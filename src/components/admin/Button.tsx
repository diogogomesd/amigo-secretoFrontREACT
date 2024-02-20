type Props = {
  value: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

export const Button = ({ value, onClick, disabled, className }: Props) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`w-full my-3 p-3 rounded bg-gray-700 ${className} text-center text-white uppercase font-bold hover:bg-gray-600 border-b-4 border-white/10`}
        disabled={disabled}
      >
        {value}
      </button>
    </div>
  );
};
