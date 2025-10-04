"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-y-2">
      <h1>Welcome to Next Lite</h1>
      <Button onClick={() => toast.info("Hello world")}>Show toast</Button>
    </div>
  );
}
