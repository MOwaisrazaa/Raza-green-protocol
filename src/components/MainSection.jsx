
import image1 from "../assets/MainSecImages/img-1.png"
import image2 from "../assets/MainSecImages/img-2.png"
import image3 from "../assets/MainSecImages/img-3.png"
import dashes from "../assets/MainSecImages/dash.png"
import "../App.css"
const MainSection = () => {
  return (
    <div className="bg-[#00ae47] w-[100vw]">
        <section className="lg:h-[88vh] lg:gap-6 flex justify-center items-center hero-container">
            <div>
                <h2 className="text-center text-[50px] font-bold text-white mb-[70px] mt-[10px] hero-heading">Green Protocol</h2>
                <div className="flex items-center md:gap-3">
                    <img className="lg:h-[160px] border border-[#00ae47]" src={image1} alt="Hero Image 1" id="hero-images"/>
                    <img className="w-20 dashes" src={dashes} alt="dashes" />
                    <img className="lg:h-[160px] border border-[#00ae47]" src={image2} alt="Hero Image 2" id="hero-images"/>
                    <img className="w-20 dashes" src={dashes} alt="dashes" />
                    <img className="lg:h-[160px] border border-[#00ae47]" src={image3} alt="Hero Image 3" id="hero-images"/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default MainSection
