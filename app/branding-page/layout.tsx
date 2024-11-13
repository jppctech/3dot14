import Footer from "@/components/footer"
import { Header } from "@/components/nav-bar"

const LayoutPage = ({children}:{ children: React.ReactNode}) => {
    return (
        <div className=" relative w-full">
            <Header/>
                {children}
            <Footer/>
        </div>
    )
}

export default LayoutPage