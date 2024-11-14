import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-24">
      <div>
        <h2 className="font-medium">ようこそプログラミングチュートリアルへ🚀</h2>
      </div>
      <Button>Click Here</Button>
      <Button>Click Here</Button>
    </main>
  );
}
