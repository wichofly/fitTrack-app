export const Form = () => {
  return (
    <section className="bg-teal-100 py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <form className="space-y-5 bg-gray-100 p-10 border-2 rounded-lg">
          <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category">Category:</label>
            <select
              className="border border-slate-300 p-2 rounded-lg w-full"
              id="category"
            >check</select>
          </div>
        </form>
      </div>
    </section>
  );
};
