import Image from "next/image";

export default function CardItem2(){
    return(
        <>
        <h1>Hola desde card 2</h1>
        <div className="flex">
            <div className="relative max-w-xl mx-auto mt-20 border border-gray-200 shadow">
                    <Image className="h-96 w-full object-contain rounded-md" src="/backWoman.png" alt="Random image" width={500} height={500}></Image>
                    <div className="absolute inset-0 flex flex-col items-center justify-center mt-40">
                        <p className="text-xs font-bold ">UP TO 30% OFF</p>
                        <h2 className="font-bold m-4">Essenctial basics</h2>
                        <a href="#" className="px-4 py-2 bg-white text-black font-medium rounded hover:bg-gray-200">
                        Shop now
                        </a>
                    </div>
            </div>

            <div className="relative max-w-xl mx-auto mt-20 border border-gray-200 shadow">
                <Image className="h-96 w-full object-contain rounded-md" src="/glasses.jpg" alt="Random image" width={500} height={500}></Image>
                <div className="absolute inset-0 flex flex-col items-center justify-center mt-40">
                    <p className="text-xs font-bold ">UP TO 30% OFF</p>
                    <h2 className="font-bold m-4">Athleisure Wear</h2>
                    <a href="#" className="px-4 py-2 bg-white text-black font-medium rounded hover:bg-gray-200">
                    Shop now
                    </a>
                </div>
            </div>

            <div className="relative max-w-xl mx-auto mt-20 border border-gray-200 shadow">
                <Image className="h-96 w-full object-contain rounded-md" src="/ShoppingBag-Yellow.jpg" alt="Random image" width={500} height={500}></Image>
                <div className="absolute inset-0 flex flex-col items-center justify-center mt-40">
                    <p className="text-xs font-bold ">UP TO 30% OFF</p>
                    <h2 className="font-bold m-4">Seasonal Favorites</h2>
                    <a href="#" className="px-4 py-2 bg-white text-black font-medium rounded hover:bg-gray-200">
                    Shop now
                    </a>
                </div>
        </div>

        </div>
        

        </>
        
    )
};