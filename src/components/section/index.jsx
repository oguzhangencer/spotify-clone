import SongItem from "../songItem";
import Title from "../title";

export default function Section({ title, more = false, items = [] }) {
  return (
    <section>
      <Title title={title} more={more} />
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
          <SongItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
