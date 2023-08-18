import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <p>Hello Admin Dashboard</p>
      <div className="p-4">
        <Button size="default" variant="destructive">
          Test
        </Button>
      </div>
    </>
  );
}