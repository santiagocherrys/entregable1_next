import Image from "next/image";
import CardItem from "@/components/Cards";
import CardItem2 from "@/components/Cards2";
import Collection from "@/components/Collection";
import Shipping from "@/components/Shipping";
import Footer from "@/components/Footer";

export default function Home() {

  // const user = {
  //   name: "John Doe",
  //   age: 30,
  //   email: "john.doe@example.com",
  // };

  const collections: Collection[] = [
    {image: "woman.jpg", title: "Women's", item: 23},
    {image: "man.png", title: "Men's", item: 9},
    {image: "jewelry.jpg", title: "Jewelry", item: 31},
    {image: "sneakers.jpg", title: "Sneakers", item: 21},
    {image: "ShoppingBag-Yellow.jpg", title: "Bags", item: 5},
    {image: "glasseswoman.png", title: "Glasses", item: 14},
  ]

  const users: User[] = [
    { image: "image1.png", title: "Ribbed Tank Top", price: 16.95 , colors: ["bg-orange-500","bg-black","bg-white"] },
    { image: "image2.png", title: "Ribbed modal T-shirt", price: 18.95, colors: ["bg-yellow-700","bg-violet-500","bg-cyan-200"]},
    { image: "image3.png", title: "Oversized Printed T-shirt", price: 10.00, colors: [] },
    { image: "image4.png", title: "Oversized Printed T-shirt", price: 16.95, colors: ["bg-white-500","bg-violet-500","bg-black"] },
    { image: "image5.png", title: "V-neck linen T-shirt", price: 114.95, colors: ["bg-yellow-800"] },
    { image: "image6.png", title: "Loose Fit Sweatshirt", price: 10.00, colors: ["bg-teal-500","bg-black","bg-neutral-300", "bg-blue-500","bg-white","bg-gray-300"] },
    { image: "image7.png", title: "Regular Fit Oxford Shirt", price: 10.00, colors: ["bg-black","bg-blue","bg-yellow-800","bg-sky-200"] },
    { image: "image8.png", title: "Loose Fit Hoodie", price: 9.9, colors: ["bg-white","bg-black","bg-neutral-300"] },
    
  ];

  return (
    <>
    <div className="flex flex-wrap gap-5 justify-center">
      {collections.map((collection, index) => (
        <Collection key={index} collection={collection} />
      ))}
    </div>
    <CardItem2 />
    <div className="flex flex-wrap gap-5">
      {users.map((user, index) => (
        <CardItem key={index} user={user} />
      ))}
    </div>
    <Shipping />

    <Footer/>
    </>
    
  );
}
