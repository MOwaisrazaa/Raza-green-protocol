import img1 from "../assets/BModel2Imgs/img-1.png"
import img2 from "../assets/BModel2Imgs/img-2.png"
import img3 from "../assets/BModel2Imgs/img-3.png"
import img4 from "../assets/BModel2Imgs/img-4.png"
import img5 from "../assets/BModel2Imgs/img-5.png"
import img6 from "../assets/BModel2Imgs/img-6.png"

const BusinessModel2 = () => {
  return (
    <div>
        <section className="mt-[60px] lg:mt-[150px] w-[90%] m-auto md:w-[80%] mb-[60px]" id="businessModel">
            <p className='text-center text-2xl text-[#00ae47] lg:mt-5'>Buy as <b>(NFT)</b> and get the profit </p>
            <div>
                <div className='flex text-center justify-center my-10 gap-5 sm:gap-10 md:gap-14 lg:gap-20 xl:gap-36'>
                    <figure className='w-fit flex items-center flex-col gap-3'>
                        <p className='sm:text-[18px] md:text-[20px] text-[#00ae47]'><b>Trash</b></p>
                        <img className='h-[100px] sm:h-[150px] lg:h-[200px]' src={img1} alt="img1" />
                        <figcaption className='sm:text-[18px] md:text-[20px] text-[#00ae47]'>When recycled</figcaption>
                    </figure>
                    <figure className='flex justify-center items-center flex-col gap-3'>
                        <p className='sm:text-[18px] md:text-[20px] text-[#00ae47]'><b>Green ouse</b></p>
                        <img className='h-[100px] sm:h-[150px] lg:h-[200px]' src={img2} alt="img2" />
                        <figcaption className='sm:text-[18px] md:text-[20px] text-[#00ae47]'>Fruits, vegetable and <br />energy sale</figcaption>
                    </figure>
                    <figure className='flex items-center flex-col gap-3'>
                        <p className='sm:text-[18px] md:text-[20px] text-[#00ae47]'><b>Solar Station</b></p>
                        <img className='h-[100px] sm:h-[150px] lg:h-[200px]' src={img3} alt="img3" />
                        <figcaption className='sm:text-[18px] md:text-[20px] text-[#00ae47]'>When used for <br /> Charging</figcaption>
                    </figure>
                </div>

                <div className='flex text-center justify-center my-10 gap-10 md:gap-14 lg:gap-20 xl:gap-36'>
                    <figure className='flex justify-center items-center flex-col gap-3'>
                        <p className='sm:text-[18px] md:text-[20px] text-[#00ae47]'><b>Electrical Mobility</b></p>
                        <img className='h-[100px] sm:h-[150px] lg:h-[200px]' src={img4} alt="img4" />
                        <figcaption className='sm:text-[18px] md:text-[20px] text-[#00ae47]'>On the Rental</figcaption>
                    </figure>
                    <figure className='flex items-center flex-col gap-3'>
                        <p className='sm:text-[18px] md:text-[20px] text-[#00ae47]'>Green Energy</p>
                        <img className='h-[100px] sm:h-[150px] lg:h-[200px]' src={img5} alt="img5" />
                        <figcaption className='sm:text-[18px] md:text-[20px] text-[#00ae47]'>Energy Sale</figcaption>
                    </figure>
                    <figure className='flex items-center flex-col gap-3'>
                        <p className='sm:text-[18px] md:text-[20px] text-[#00ae47]'>Mosquito System</p>
                        <img className='h-[100px] sm:h-[150px] lg:h-[200px]' src={img6} alt="img6" />
                        <figcaption className='sm:text-[18px] md:text-[20px] text-[#00ae47]'>Refill products sale</figcaption>
                    </figure>
                </div>
            </div>
        </section>
    </div>
  )
}

export default BusinessModel2