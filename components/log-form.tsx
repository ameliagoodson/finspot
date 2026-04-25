"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function LogForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="space-y-1">
        <Label htmlFor="date">Date</Label>
        <Input id="date" name="date" type="date" required />
      </div>

      <div className="space-y-1">
        <Label htmlFor="location">Location</Label>
        <Input id="location" name="location" placeholder="e.g. Gordons Bay" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label htmlFor="visibilityMin">Visibility min (m)</Label>
          <Input
            id="visibilityMin"
            name="visibilityMin"
            type="number"
            min={0}
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="visibilityMax">Visibility max (m)</Label>
          <Input
            id="visibilityMax"
            name="visibilityMax"
            type="number"
            min={0}
          />
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="How was the dive?"
        />
      </div>

      <Button type="submit" className="w-full">
        Save log
      </Button>
    </form>
  );
}
