import Button from "@/components/Button";
import GradationSwatch from "@/components/GradationSwatch";

export default function NotFound() {
  return (
    <section className="container-editorial flex min-h-[60vh] flex-col items-center justify-center gap-6 py-20 text-center">
      <GradationSwatch className="h-2 w-28 rounded-full" />
      <h1 className="font-display text-4xl italic text-ink">Nothing at this shade.</h1>
      <p className="max-w-sm text-ink-soft">
        The page you’re looking for doesn’t exist — it may have moved, or the link’s off.
      </p>
      <Button href="/">Back to home</Button>
    </section>
  );
}
