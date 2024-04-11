import { NavLink } from "react-router-dom";
import SongItem from "../songItem";

export default function Section({ title, more = false, items = [] }) {
  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline">
          {title}
        </h3>
        {more && (
          <NavLink
            to={more}
            className="text-sm hover:underline font-semibold uppercase text-link tracking-wider"
          >
            See all
          </NavLink>
        )}
      </header>
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
          <SongItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
