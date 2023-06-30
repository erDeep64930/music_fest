import firstShow from "../assets/images/band1.jpg";
import secondShow from "../assets/images/band2.jpg";
import thirdShow from "../assets/images/band3.jpg";
const Headliner = () => {
    const cardMenu = [
        {
          id: 1,
          title: "first show 1:00 to 3:00",
          photo: firstShow,
          desc: "First show",
        },
        {
          id: 2,
          title: "second show 5:00 to 7:00",
          photo: secondShow,
          desc: "second show",
        },
        {
          id: 3,
          title: "third show 9:00 to 1:00",
          photo: thirdShow,
          desc: "third show",
        },
      ];
  return (
    <div className="max-w-screen-lg mx-auto mt-20">
      <h2 className="text-center">Headliner</h2>
      <p>
        Experience the iconic delight from mode-up artist across 7 days that
        music fans are calling "Nagaland's Hornbill Music festival is one of the
        largest music festivals celebrated in India. The Hornbill Music festival
        is celebrated as a cultural feast "
      </p>
      {/* this is for card start here  */}
      <div className="mt-4 flex w-full gap-4 pb-5 snap-x overflow-x-auto ">
        {cardMenu.map(({ id, title, photo ,desc}) => {
          return (
            <card className="min-w-[80%] md:min-w-[40%]" key={id}>
              <img
                className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
                src={photo}
                alt={desc}
              />
              <h5>{title}</h5>
              <h6>{desc}</h6>
            </card>
          );
        })}
      </div>
      {/* this is for card end  here  */}
    </div>
  );
};

export default Headliner;
