import Image from "next/image";

export default function Footer(){
    return(
        <>

        <div className="flex flex-wrap gap-20">
                <div>
                    <h1 className="mb-5">ECOMUS</h1>

                    <p>Address: 1234 Fashion</p>
                    <p>New York, NY 10001</p>
                    <p>Email: info@fashionshop.com</p>
                    <p>Phone: (212) 555-1234</p>
                    <br></br>
                    <p>Get direction</p>
                    <div className="flex">
                    <div className="relative rounded-full bg-gray-200 p-4">
                        <Image
                        src="/facebook.png"
                        height={24}  // Reduce the size of the cube
                        width={24}
                        alt="Dummy Image"
                        className="object-contain"
                        />
                    </div>

                    <div className="relative rounded-full bg-gray-200 p-4">
                        <Image
                        src="/x.png"
                        height={24}  // Reduce the size of the cube
                        width={24}
                        alt="Dummy Image"
                        className="object-contain"
                        />
                    </div>

                    <div className="relative rounded-full bg-gray-200 p-4">
                        <Image
                        src="/instagram.png"
                        height={24}  // Reduce the size of the cube
                        width={24}
                        alt="Dummy Image"
                        className="object-contain"
                        />
                    </div>

                    <div className="relative rounded-full bg-gray-200 p-4">
                        <Image
                        src="/tik-tok.png"
                        height={24}  // Reduce the size of the cube
                        width={24}
                        alt="Dummy Image"
                        className="object-contain"
                        />
                    </div>

                    <div className="relative rounded-full bg-gray-200 p-4">
                        <Image
                        src="/pinterest.png"
                        height={24}  // Reduce the size of the cube
                        width={24}
                        alt="Dummy Image"
                        className="object-contain"
                        />
                    </div>
                    </div>
                </div>

                <div>
                    <h1 className="mb-5">Help</h1>

                    <p>PRivacy Policy</p>
                    <p>Returns + Exchanges</p>
                    <p>Shipping</p>
                    <p>Terms & Conditions</p>
                    <p>FAQ's</p>
                    <p>Compare</p>
                    <p>My Wishlist</p>
                </div>

                <div>
                    <h1 className="mb-5">About us</h1>

                    <p>OUr Story</p>
                    <p>Visit Our Store</p>
                    <p>Contact Us</p>
                    <p>Account</p>
                </div>


                <div>
                    <h1 className="mb-5">Sign Up for Email</h1>
                    <p>Sign up to get first dibs on new arrivals, sales</p>
                    <p>Exclusive content, events and more!</p>    
                </div>   
        </div>
         
        </>
        
    )
}