import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";

export default function Home() {
  return (
    <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <Headline title="Index Page" />
      <Links />
    </main>
  );
}
