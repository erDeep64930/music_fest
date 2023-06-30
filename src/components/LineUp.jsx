const LineUp = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-20">
      <h2>Jhoomar</h2>
      <h6>1st july 9pm -main stage</h6>
      {/* this  is for timeline start here */}
      <div className="relative rounded-lg mt-5 bg-zinc-800 py-4 px-2 text-zinc-200 ">
        <div className="absolute top-0 left-1/2 w-4 ml-[-8px] h-full rounded-full bg-gradient-to-b from-sky-700 via-cyan-400 to-blue-900"></div>
    <div className="sticky top-1/2">
        <div className="relative h-4 w-4 rounded-full animate-pulse top-0 left-1/2 ml-[-7.5px]">
            <div></div>
            <div className="bg-rose-500 w-4 h-4 relative rounded-full "></div>
        </div>
    </div>
        {/* timeline data start here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="p-2 bg-zinc-900 rounded-lg my-4">19 june</h4>
            <div></div>
            <div>Deepak Kumar</div>
            <div>B.tech</div>
          </div>
          <div>
            <h4 className="p-2 bg-zinc-900 rounded-lg my-4">5 September</h4>
            <div></div>
            <div>Kran Kumar</div>
            <div>B.tech</div>
          </div>
          
        </div>

        {/* timeline data end here */}
      </div>
      {/* this  is for timeline end here */}
    </div>
  );
};

export default LineUp;
