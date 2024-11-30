'use client'

import {useEffect, useState} from 'react'
import Dragon from "@/components/Header/Dragon";
import Card from "@/components/Cards/Card";
import SerachLine from "@/components/Cards/SerachLine";
import Filter from "@/components/Cards/Filter";

import axios from 'axios';

export default  function Home ()  {

    const [cards, setCards] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/products');
                console.log(response.data);
                // @ts-ignore
                setCards(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

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
