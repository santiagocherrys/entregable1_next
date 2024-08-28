import Image from "next/image";

export default function Shipping(){
    return(
        <>
  <div className="flex items-center gap-5">
    
        <div className="relative rounded-full bg-gray-200 p-4 flex items-center justify-center">
            <Image
            src="/cube.png"
            height={36}  // Reduce the size of the cube
            width={36}
            alt="Dummy Image"
            className="object-contain"
            />
        </div>
        <div className="flex flex-col">
        <h2  className="font-bold text-xs">Free Shipping</h2>
        <p className="text-xs">Free shipping over order $120</p>
        </div>
        

        <div className="relative rounded-full bg-gray-200 p-4 flex items-center justify-center">
            <Image
            src="/creditcard.png"
            height={36}  // Reduce the size of the cube
            width={36}
            alt="Dummy Image"
            className="object-contain"
            />
        </div>
        <div className="flex flex-col">
            <h2 className="font-bold text-xs">Flexible Payment</h2>
            <p className="text-xs">Pay with Multiple Credit Cards</p>
        </div>
        

        <div className="relative rounded-full bg-gray-200 p-4 flex items-center justify-center">
            <Image
            src="/return.png"
            height={36}  // Reduce the size of the cube
            width={36}
            alt="Dummy Image"
            className="object-contain"
            />
        </div>
        <div className="flex flex-col">
            <h2 className="font-bold text-xs">14 Day Returns</h2>
            <p className="text-xs">Within 30 days for an exchange</p>
        </div>

        <div className="relative rounded-full bg-gray-200 p-4 flex items-center justify-center">
            <Image
            src="/support.png"
            height={36}  // Reduce the size of the cube
            width={36}
            alt="Dummy Image"
            className="object-contain"
            />
        </div>
        <div className="flex flex-col">
            <h2 className="font-bold text-xs">Premium Support</h2>
            <p className="text-xs">Outstanding premium support</p>
        </div>
  </div>

        </>
    )
}