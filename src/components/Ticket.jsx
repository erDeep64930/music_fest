const Ticket = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-20">
      <h2 className="mt-20">Ticket </h2>
      <table className="my-5 table w-full border border-zinc-500 border-collapse">
        <thead className="text-lg font-bold">
          <td className="border border-zinc-500 p-3 ">Ticket</td>
          <td className="border border-zinc-500 p-3 ">Price</td>
        </thead>
        <tbody>
          <tr>
            <td className="border border-zinc-400">Single day ticket</td>
            <td className="border border-zinc-400">$20</td>
          </tr>
          <tr>
            <td className="border border-zinc-400">7 day ticket</td>
            <td className="border border-zinc-400">$30</td>
          </tr>
        </tbody>
        <caption>
            Once they're gone , they're gone !
        </caption>
      </table>
    </div>
  );
};

export default Ticket;
