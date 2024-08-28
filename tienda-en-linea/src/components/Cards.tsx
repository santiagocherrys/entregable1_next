import Image from "next/image";

interface User{
    image: string;
    title: string;
    price: number;
    colors: string[];
}

interface UserProfileProps {
    user: User;
  }
export default function CardItem({user}: UserProfileProps){
    return(<>
    <div className="max-w-fit bg-white border border-gray-200 rounded-lg shadow ">
        <Image src={`/${user.image}`} alt="dexter" width={300} height={300}></Image>
         <h2 className="text-gray-700 font-bold">{user.title}</h2>
         <h2 className="text-gray-700 font-bold">${user.price}</h2>
        <div className="flex mt-4">
            {user.colors.map((color, index) => (
            <div>

                 {/* First selection, this is the color in the picture */}
                <div className={`w-6 h-6 rounded-full border-2 border-black flex items-center justify-center mr-2 ${index === 0 ? color : 'hidden'}`}>
                <div className={`w-4 h-4 rounded-full ${color}`} ></div>
                </div>
                 {/* Others options */}
                <div className={`w-6 h-6 rounded-full border-2 border-gray-300 ${index !== 0 ? color : 'hidden'} mr-2`}></div>
            </div>
            ))}
        </div>
        
    </div>

    </>);
}