import Button from "@/components/Button";
import GradationSwatch from "@/components/GradationSwatch";
import { getDictionary } from "@/lib/i18n";
import { defaultLocale } from "@/lib/i18n/types";

export default function NotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <section className="container-editorial flex min-h-[60vh] flex-col items-center justify-center gap-6 py-20 text-center">
      <GradationSwatch className="h-2 w-28 rounded-full" />
      <h1 className="font-display text-4xl italic text-ink">
        {dict.notFound.title}
      </h1>
      <p className="max-w-sm text-ink-soft">{dict.notFound.body}</p>
      <Button href={`/${defaultLocale}`}>{dict.notFound.backHome}</Button>
    </section>
  );
}
