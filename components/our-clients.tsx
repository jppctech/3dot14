import Image from "next/image"

export const OurCLients = () => {
    const images = [
        {
            url: "/amazon.png"
        },
        {
            url: "/bybit.png"
        },
        {
            url: "/dream11.png"
        },
        {
            url: "/kredit.png"
        },
        {
            url: "/lazada.png"
        },
        {
            url: "/grow.png"
        },
    ]
    return (
        <div className="max-w-screen-2xl mx-auto py-16 w-full">
            <p className="text-center text-3xl font-[500]">Our clients</p>
            <div className="grid md:grid-cols-6 grid-cols-2 px-4 mt-4 w-full justify-between">
                {images.map((url,index) => (
                    <Image 
                        key={index}
                        src={url.url}
                        alt={url.url}
                        height={150}
                        width={150}
                        className=" object-contain"
                    />
                ))}
            </div>
        </div>
    )
}