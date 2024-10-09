export const Header = () => {
  return (
    <header className=" bg-teal-800 text-white border-b-4 border-teal-600 p-4 ">
      <div className="max-w-4xl mx-auto flex justify-between">
        <h1 className="text-lg font-bold uppercase">Calorie Counter</h1>

        <button className="hover:bg-red-300 hover:text-black px-1 rounded-md">
          Recheck
        </button>
      </div>
    </header>
  );
};
