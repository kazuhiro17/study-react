import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";

export function Main(props: { page: string }) {
  return (
    <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <Headline page={props.page}>
        <p>Hello {props.page} Page</p>
      </Headline>
      <Links />
    </main>
  );
}
