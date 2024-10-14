interface Props {
  calories: number;
  text: string;
}

export const CaloriesDisplay = ({ calories, text }: Props) => {
  return (
    <div className="bg-gradient-to-br from-teal-100 to-teal-300 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center transform hover:scale-105">
      <p className="text-5xl font-bold text-teal-800">{calories}</p>
      <span className="text-xl text-teal-700 mt-2 block font-medium tracking-wider uppercase">
        {text}
      </span>
    </div>
  );
};
