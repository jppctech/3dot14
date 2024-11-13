import { title } from "process"
import BlogList from "./components/blog-list"

const bloglists = [
  {
    img: "/blog-1.webp",
    title: "How to create great video content from home?",
    des: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
  },
  {
    img: "/blog-2.webp",
    title: "How to create great video content from home?",
    des: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
  },
  {
    img: "/blog-3.webp",
    title: "How to create great video content from home?",
    des: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
  },
  {
    img: "/blog-4.webp",
    title: "How to create great video content from home?",
    des: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
  },
  {
    img: "/blog-1.webp",
    title: "How to create great video content from home?",
    des: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
  },

]
const BlogPage = () =>{
  return(
    <div>
      <section className="bg-[#f5d5bf] w-full">
        <div className="max-w-screen-2xl mx-auto container px-4 py-16 md:px-6 md:py-24">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Latest Insights & News</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover the latest trends, strategies, and insights in app growth and user acquisition
            </p>
          </div>
        </div>
      </section>
      {bloglists.map((blog,index)=>(
        <BlogList
          img={blog.img}
          title={blog.title}
          des={blog.des}
        />
      ))}
    </div>
  )
}
export default BlogPage