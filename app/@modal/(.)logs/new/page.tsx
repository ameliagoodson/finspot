"use client";

import { useRouter } from "next/navigation";

import { LogForm } from "@/components/log-form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function AddLogModal() {
  const router = useRouter();
  return (
    <Sheet
      open
      onOpenChange={(open) => {
        if (!open) router.back();
      }}
    >
      <SheetContent
        side="right"
        className="flex flex-col gap-6 p-6 sm:max-w-md"
      >
        <SheetHeader className="p-0">
          <SheetTitle>Add a log</SheetTitle>
          <SheetDescription>Record a new dive or snorkel.</SheetDescription>
        </SheetHeader>
        <LogForm />
      </SheetContent>
    </Sheet>
  );
}
