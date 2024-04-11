import { NavLink } from "react-router-dom";

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
    </section>
  );
}
