import bg_hero from "../assets/images/hero.jpg";
import logo from "../assets/images/logo.png";
const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h[calc(100vh-100px)] min-h-[400px] bg-center bg-cover bg-fixed"
      style={{
        backgroundImage: `url(${bg_hero})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* this section is for background logo start here */}
      <div className="bg-white/30 py-2 pl-4 rounded-xl text-center backdrop-blur-md ">
        <div className="relative">
          <img src={logo} alt="logo" width={175} />
          {/* this is for animation logo start here */}
          <div className="flex items-center justify-center mt-[-70px] mb-5 ">
          <div className="bg-pink-500 w-14 h-14 rounded-full flex items-center justify-center gap-1">
            <div className="w-1 h-2 bg-pink-400 rounded-full animate-wavey "></div>
            <div className="w-1 h-3 bg-pink-200 rounded-full animate-wavey "></div>
            <div className="w-1 h-4 bg-pink-100 rounded-full animate-wavey "></div>
            <div className="w-1 h-3 bg-pink-200 rounded-full animate-wavey "></div>
            <div className="w-1 h-2 bg-pink-400 rounded-full animate-wavey "></div>
          </div>
          </div>
           {/* this is for animation logo end here */}
        </div>

        <div className="font-semibold text-2xl font-alkatra text-white ">
          Deep:<span className="text-sky-700 ">Fest</span>
        </div>
      </div>
      {/* this section is for background logo end here */}

      {/* this section is for form */}
      <form>
        <div className="font-bold text-sm mt-3">
          Keep me updated with news and promotion
        </div>
        <div className="mt-3 flex gap-2">
          <input
            type="email"
            className="rounded-sm border-white/40 bg-white/30 backdrop-blur-md p-2 font-bold text-sky-900 placeholder-zinc-500 caret-pink-500 outline-pink-500 focus:outline"
            placeholder="email"
          />

          <div className="cursor-pointer rounded-sm bg-pink-500 py-2 px-4 font-bold transition-colors hover:bg-sky-900 hover:shadow-lg hover:shadow-black/20">
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Hero;
