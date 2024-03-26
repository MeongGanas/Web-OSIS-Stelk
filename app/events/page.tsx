import { CardRevealBottom, CardRevealTop } from "../ui/Reveal";
import CardEvent from "../ui/home/HomeComponent/CardEvent";

export default function Events() {
  return (
    <div className="container min-h-screen w-full py-28">
      <div className="w-full text-center">
        <CardRevealBottom>
          <h1 className="mb-2 text-3xl font-bold text-primary">
            All About Events
          </h1>
        </CardRevealBottom>
        <CardRevealTop>
          <p className="text-wrap text-sm italic text-slate-600">
            Berikut ini adalah semua event-event yang kami selesaikan.
          </p>
        </CardRevealTop>
      </div>
      <div className="mt-5 grid grid-cols-1 justify-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <CardEvent />
        <CardEvent />
        <CardEvent />
        <CardEvent />
        <CardEvent />
        <CardEvent />
      </div>
    </div>
  );
}
