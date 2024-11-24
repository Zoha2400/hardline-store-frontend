import Image from "next/image";
import Breadcrumbs from "@/components/Header/Breadcrupms";

export default function Home() {
    return (
        <div className="w-full pt-16">
            <Breadcrumbs/>
            <p>Profile</p>
        </div>
    );
}
