import { Legal } from "@/sanity/types";
import Link from "next/link";

export default function Footer({ impressum }: { impressum: Legal }) {
  return (
    <div className="flex justify-between p-[2vw] bg-zinc-50">
      <div className="flex-col">
        <div>{impressum?.name}</div>
        <div>{impressum?.street}</div>
        <div>{impressum?.city}</div>
        <div>{impressum?.tel}</div>
        <div>{impressum?.mail}</div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 md:translate-y-0">
        <a
          href="https://www.instagram.com/journeyman.cycles/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/insta-preview-3.png"
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
