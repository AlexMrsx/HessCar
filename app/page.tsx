import Image from "next/image";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import MainForm from "@/components/ui/form";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col px-5 pt-10 sm:px-100">
      <Card className="bg-white ">
          <CardHeader>
              <CardTitle  className="flex items-center text-3xl font-bold gap-2"><Image src="/favicon.png" width={32} className="rounded-4xl" height={32} alt="HessCar" />HessCar</CardTitle>
              <CardDescription>Calcule le coût des trajets avec tes potes !</CardDescription>
          </CardHeader>
          <CardContent>
                <MainForm/>
          </CardContent>
      </Card>
    </div>
  );
}
