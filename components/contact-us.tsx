import Image from "next/image"
import ContactForm from "./contact-form"
import { useOpenGetStarted } from "@/hooks/open-get-started"
import { Button } from "./ui/button";
import { IoMdClose } from "react-icons/io";

const ContactUs = () => {
    const {onClose} = useOpenGetStarted();

    return (
        <section className="w-full py-8 flex flex-col">
            <Button className=" absolute top-16 right-16 rounded-full h-12 w-12 bg-gray-500" onClick={() => onClose()}>
                <IoMdClose/>
            </Button>
            <div className=" w-full max-w-screen-2xl mx-auto grid md:grid-cols-2 md:mt-32 mt-12">
                <div className="w-full">
                    <p className="md:text-4xl text-2xl">We empower you to boost your business</p>
                    <p className="mt-10">3dot14 understands the needs of the business in-depth and provide the solutions accordingly. We were able to drive higher than usual engagements through sharp targeting and effective creatives.</p>
                    <div className="mt-4 flex gap-6">
                        <p className="font-[500]">Manish Upadhyay</p>
                        <p>Product Growth - OneScore</p>
                    </div>
                    <p className="font-[500] text-2xl mt-10">
                    Integrated with all major MMPs
                    </p>
                    <div className="flex mt-4 gap-8 flex-wrap">
                        <Image
                            src={"/adjust.png"}
                            alt="logo"
                            height={100}
                            width={100}
                            className="w-32 object-contain"
                        />
                        <Image
                            src={"/appsflyer.png"}
                            alt="logo"
                            height={100}
                            width={100}
                            className="w-32 object-contain"
                        />
                        <Image
                            src={"/branch.png"}
                            alt="logo"
                            height={100}
                            width={100}
                            className="w-32 object-contain"
                        />
                        <Image
                            src={"/kochava..png"}
                            alt="logo"
                            height={100}
                            width={100}
                            className="w-32 object-contain"
                        />
                        <Image
                            src={"/singular.png"}
                            alt="logo"
                            height={100}
                            width={100}
                            className="w-32 object-contain"
                        />
                    </div>
                </div>

                {/* form */}
                <div className="w-full">
                    <ContactForm/>
                </div>
            </div>
        </section>
    )
}

export default ContactUs