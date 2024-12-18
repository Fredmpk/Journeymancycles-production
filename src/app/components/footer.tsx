import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-between p-[2vw] bg-zinc-50">
      <div>
        <p>Erdmann Kunze</p>
        <p>Herrmann-Meyer-Straße</p>
        <p>6666b Leipzif</p>
        <p>email@email.de</p>
        <p>0133333 4444567</p>
      </div>
      <div>
        <a
          href="https://www.instagram.com/journeyman.cycles/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/insta-preview.png"
            alt="Instagram"
            className="w-[10vw]"
          />
        </a>{" "}
      </div>
      <div className="flex flex-col gap-3">
        <Link href="/privacy">Datenschutz</Link>
        <Link href="/reisegewerbe">Reisegewerbe</Link>
      </div>
    </div>
  );
}
