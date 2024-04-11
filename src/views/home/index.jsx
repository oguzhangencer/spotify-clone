import Section from "~/components/section";
import songs from "~/data/songs";

export default function Home() {
  return (
    <div className="grid gap-y-8">
      <Section title="Recently played" more="/blabla" items={songs} />
      <Section title="Shows to try" more="/blabla" items={songs} />
      <Section title="Made For Oguzhan Gok" more="/blabla" items={songs} />
    </div>
  );
}
