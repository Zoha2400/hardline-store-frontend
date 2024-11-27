import Image from "next/image";
import Breadcrumbs from "@/components/Header/Breadcrupms";

export default function Home() {
    return (
        <div className="w-full h-screen px-2">
            <Breadcrumbs/>
            <p>Profile</p>
        </div>
    );
}
