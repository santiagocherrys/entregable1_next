import Image from "next/image";


interface Collection{
    image: string;
    title: string;
    item: number;
}

interface CollectionProps{
    collection: Collection;
}
export default function Collection({collection}: CollectionProps){

    return(
        <>
        <div className="flex flex-col items-center">
            <Image
            src={`/${collection.image}`}
            height={150}
            width={150}
            alt="Dummy Image"
            className="rounded-full aspect-square object-contain  border border-gray-300 shadow"
            />
            <h2 className="font-bold mt-5">{collection.title}</h2>
            <p>{collection.item} items</p>
        </div>
        
        </>
    )
}