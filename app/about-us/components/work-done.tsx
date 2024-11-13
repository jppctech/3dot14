
interface props {
    img : string
  }

export const WorkDone = () =>{
    return(
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold black mb-8">WHAT WE'VE DONE</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                 <img
                  alt="whatwehavedoneImg"
                  className="rounded-lg object-cover w-full h-[300px]"
                  width={500}
                  height={500}
                  src="/blog-1.webp"
                />
            </div>
          </div>
        </section>
  
    )
}