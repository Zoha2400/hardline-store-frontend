import Breadcrumbs from "@/components/Header/Breadcrupms";
import Cart from "@/components/Cart";
import Profile from "@/components/Profile";

export default function Home() {
    return (
        <div className="w-full h-screen px-2 gap-4 flex justify-center">
            <div>
                <Profile/>
            </div>
            <Cart/>
        </div>
    );
}
