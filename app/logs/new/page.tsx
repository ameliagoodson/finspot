import { LogForm } from "@/components/log-form";

export default function AddLogPage() {
  return (
    <main className="mx-auto w-full max-w-md px-6 py-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold">Add a log</h1>
          <p className="text-muted-foreground text-sm">
            Record a new dive or snorkel.
          </p>
        </div>
        <LogForm />
      </div>
    </main>
  );
}
