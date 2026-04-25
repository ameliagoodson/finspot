"use client";

import { Button } from "@/components/ui/button";

export const AddLogButton = () => {
  const handleAddLog = () => {
    console.log("log added");
  };
  return <Button onClick={handleAddLog}>Add Log</Button>;
};
