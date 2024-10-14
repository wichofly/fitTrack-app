interface Props {
  calories: number;
  text: string;
}

export const CaloriesDisplay = ({ calories, text }: Props) => {
  return (
    <p className="text-2xl text-slate-600 rounded-full grid grid-cols-1 text-center">
      <span className="font-bold text-4xl">{calories}</span>
      {text}
    </p>
  );
};
