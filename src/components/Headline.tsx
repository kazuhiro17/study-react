export function Headline(props: { page: string; children: React.ReactNode }) {
  return (
    <div>
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        {props.page} Page
      </h1>
      {props.children}
    </div>
  );
}
