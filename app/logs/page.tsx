import Link from "next/link";

export default function LogsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-10">
      <h1>Logs</h1>
      <Link href="/logs/new">Add Log</Link>
    </main>
  );
}
