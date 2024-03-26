import { CardRevealBottom, CardRevealTop } from "../Reveal";
import CardEvent from "./HomeComponent/CardEvent";

export default function Events() {
  return (
    <div className="container min-h-screen w-full py-28">
      <div className="w-full text-center">
        <CardRevealBottom>
          <h1 className="mb-2 text-3xl font-bold text-primary">Events</h1>
        </CardRevealBottom>
        <CardRevealTop>
          <p className="text-wrap text-sm italic text-slate-600">
            Berikut ini adalah event-event yang baru kami selesaikan.
          </p>
        </CardRevealTop>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        <CardEvent />
        <CardEvent />
        <CardEvent />
      </div>
    </div>
  );
}
