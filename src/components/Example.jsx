import img1 from "../assets/exampleImages/arrow-1.png"
import img2 from "../assets/exampleImages/img-2.png"
import img3 from "../assets/exampleImages/arrow-3.png"
import img4 from "../assets/exampleImages/img-4.png"
import img5 from "../assets/exampleImages/arrow-5.png"
import img6 from "../assets/exampleImages/img-6.png"
import img7 from "../assets/exampleImages/arrow-7.png"
import img8 from "../assets/exampleImages/img-8.png"
import img9 from "../assets/exampleImages/arrow-9.png"
import img10 from "../assets/exampleImages/img-10.png"
import img11 from "../assets/exampleImages/img-11.png"

const Example = () => {
  return (
    <div>
        <section className="mt-[60px] lg:mt-[150px] m-auto md:w-[80%] mb-[60px]" id="businessModel">
            <h2 className="text-3xl sm:w-[90%]  m-auto  font-bold text-green-600 md:text-4xl lg:text-5xl">Example</h2>
            <p className="border-2 sm:w-[90%] m-auto rounded-full border-[#84d1a6] mb-6 mt-2 lg:mb-12 lg:mt-4"></p>

            <div>
                <p className='sm:text-[18px] md:text-[20px] sm:mt-10 flex items-center justify-center text-[#00ae47]' id='example-text'>1 Greenhouse = <b className='ml-1 sm:ml-2 md:mr-3'>100 NFT</b> <img className='w-12 mt-1 mx-2 sm:mx-3 md:mx-4' src={img1} alt="arrow image" /> <b className='mr-1 sm:mr-2 md:mr-3'>100 USD </b>Price</p>

                <div className='mt-5'>
                    <div className='flex items-center justify-center exp-frst-box'>
                        <img className='example-img sm:h-[86px] lg:h-[160px]' src={img2} alt="People image"/>
                        <div className='arrow-container sm:w-[70px]'>
                            <p className='lg:w-[70px]'>Buy</p>
                            <img src={img3} alt="arrow image" />
                        </div>
                            <img className='h-13 leaf-image example-img sm:h-[86px] lg:h-[160px]' src={img4} alt="Leaf image" />
                        <div className='arrow-container sm:w-[70px]'>
                            <p>Generate</p>
                            <img src={img5} alt="arrow image" />
                        </div>
                        <img className='example-img sm:h-[86px] lg:h-[160px]' src={img6} alt="arrow image" />
                    </div>
                    <div className='flex justify-center'>
                        <div className='profit-arrow sm:w-[25%] lg:w-[20%]'><img src={img7} alt="profit arrow" /></div>
                        <div><img className='coin sm:h-[80px]' src={img8} alt="coin image" /></div>
                        <div className='get-arrow sm:w-[25%] lg:w-[20%] sm:ml-10 '><img src={img9} alt="get arrow" /></div>
                    </div>
                </div>
            </div>

            <div className='flex mt-32 justify-center items-center text-[20px] md:text-[30px]'>
                <div className='w-[50%] flex flex-col items-center text-center justify-center h-[60vh] bg-[#dcdcdc]'>
                    <img className='w-[78px] mb-8 md:w-[100px]' src={img10} alt="leaf Image" />
                    <p className='text-[#00ae47]'>Buy NFT to help <br />the environment <br /> and get passive <br />income</p>
                </div>
                <div className='w-[50%] flex flex-col items-center text-center justify-center h-[60vh] bg-[#00ae47]'>
                    <img className='w-[78px] mb-8 md:w-[100px]' src={img11} alt="leaf Image" />
                    <p className='text-white'>Advantage: <br />Resale the ownership <br />Borrow <br />Generate profit</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Example