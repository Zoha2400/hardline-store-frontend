import Dragon from "@/components/Header/Dragon";
import Breadcrumbs from "@/components/Header/Breadcrupms";
import Card from "@/components/Cards/Card";
import SerachLine from "@/components/Cards/SerachLine";
import Filter from "@/components/Cards/Filter";

const cards = [
    {
        img: '/example.svg',
        rate: 4.5,
        title: 'MSI X344',
        price: 1.499,
        description: 'Intel Core i9-11900KF, 16GB DDR4, 512GB SSD, NVIDIA GeForce RTX 3060 Ti, 165W, 100% UEFI, 144Hz, 1080p',
        id: '184329',
        url: '/product/184329',
    },
    {
        img: '/example.svg',
        rate: 4.5,
        title: 'MSI X344',
        price: 1.499,
        description: 'Intel Core i9-11900KF, 16GB DDR4, 512GB SSD, NVIDIA GeForce RTX 3060 Ti, 165W, 100% UEFI, 144Hz, 1080p',
        id: '184329',
        url: '/product/184329',
    },
    {
        img: '/example.svg',
        rate: 4.5,
        title: 'MSI X344',
        price: 1.499,
        description: 'Intel Core i9-11900KF, 16GB DDR4, 512GB SSD, NVIDIA GeForce RTX 3060 Ti, 165W, 100% UEFI, 144Hz, 1080p',
        id: '184329',
        url: '/product/184329',
    },
    {
        img: '/example.svg',
        rate: 4.5,
        title: 'MSI X344',
        price: 1.499,
        description: 'Intel Core i9-11900KF, 16GB DDR4, 512GB SSD, NVIDIA GeForce RTX 3060 Ti, 165W, 100% UEFI, 144Hz, 1080p',
        id: '184329',
        url: '/product/184329',
    },
    {
        img: '/example.svg',
        rate: 4.5,
        title: 'MSI X344',
        price: 1.499,
        description: 'Intel Core i9-11900KF, 16GB DDR4, 512GB SSD, NVIDIA GeForce RTX 3060 Ti, 165W, 100% UEFI, 144Hz, 1080p',
        id: '184329',
        url: '/product/184329',
    },
]
export default function Home() {
  return (
    <div className="container flex justify-center">
        <div className="w-11/12">
         <Dragon/>

            <SerachLine/>

            <div className="items my-3 h-fit flex gap-4 justify-between">
                <Filter/>

                <div className="items grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-2 gap-4 justify-items-center">
                    {cards.map((i: any, key) => {
                        return <Card data={i} key={key}/>
                    })}
                </div>

                </div>
            </div>
        </div>
        );
        }
