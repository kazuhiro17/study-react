export default function Headline(props: { title: string }) {
  return (
    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
      {props.title}
    </h1>
  );
}
