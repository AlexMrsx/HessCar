import Image from "next/image";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import MainForm from "@/components/ui/form";

export default function Home() {
  return (
    <div className={"flex flex-col pt-10 bg-primary h-full  px-5 "}>
      <Card className="bg-white">
          <CardHeader>
              <CardTitle >HessCar</CardTitle>
              <CardDescription>Calcule le coût des trajets avec tes potes !</CardDescription>
          </CardHeader>
          <CardContent>
                <MainForm/>
          </CardContent>
      </Card>
    </div>
  );
}
