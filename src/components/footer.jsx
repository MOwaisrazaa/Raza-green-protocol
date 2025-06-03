import img1 from "../assets/MainSecImages/img-1.png"
import img2 from "../assets/MainSecImages/img-2.png"
import img3 from "../assets/MainSecImages/img-3.png"
import dashes from "../assets/MainSecImages/dash.png"

const Footer = () => {
  return (
    <div className="bg-[#00ae47]">
        <section className="lg:h-[88vh] lg:gap-6 flex justify-center items-center hero-container">
            <div>
                <div className="flex items-center md:gap-3">
                    <img className="lg:h-[160px] border border-[#00ae47]" src={img1} alt="Hero Image 1" id="hero-images"/>
                    <img className="w-20 dashes" src={dashes} alt="dashes" />
                    <img className="lg:h-[160px] border border-[#00ae47]" src={img2} alt="Hero Image 2" id="hero-images"/>
                    <img className="w-20 dashes" src={dashes} alt="dashes" />
                    <img className="lg:h-[160px] border border-[#00ae47]" src={img3} alt="Hero Image 3" id="hero-images"/>
                </div>
                <h2 className="text-center text-[50px] font-bold text-white mb-[70px] mt-[70px] hero-heading">Thank You</h2>
            </div>
        </section>
    </div>
  )
}

export default Footer