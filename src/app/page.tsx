import Image from "next/image";
import Dragon from "@/components/Header/Dragon";
import Breadcrumbs from "@/components/Header/Breadcrupms";
import Card from "@/components/Cards/Card";
import SerachLine from "@/components/Cards/SerachLine";

export default function Home() {
  return (
    <div className="container flex justify-center">
        <div className="w-11/12">
         <Dragon/>
            <Breadcrumbs/>

            <SerachLine/>

            <div className="items my-3 grid grid-cols-5 gap-4 justify-items-center">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </div>
        </div>
    </div>
  );
}
