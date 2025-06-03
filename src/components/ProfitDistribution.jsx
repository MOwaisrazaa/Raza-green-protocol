import img1 from "../assets/profitImages/img-1.png"
import img2 from "../assets/profitImages/img-2.png"
import img3 from "../assets/profitImages/img-3.png"


const ProfitDistribution = () => {
  return (
    <div>
        <section className="mt-[60px] lg:mt-[150px] w-[90%] m-auto md:w-[80%] mb-[60px]" id="ProfitDistribution">
            <h2 className="text-3xl font-bold text-green-600 md:text-4xl lg:text-5xl">Profit Distribution</h2>
            <p className="border-2 rounded-full border-[#84d1a6] mb-6 mt-2 lg:mb-12 lg:mt-4"></p>

            <div className='text-white grid sm:grid-cols-3 mt-16'>
                <div className='flex justify-center items-center flex-col gap-5 bg-[#009f32] h-[300px] sm:h-[350px]'>
                    <img className='h-[150px]' src={img1} alt="img1" />
                    <p className='text-2xl sm:text-3xl'>Owner</p>
                    <p className='text-2xl sm:text-3xl font-bold'>70%</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-5 bg-[#00bf54] h-[300px] sm:h-[350px]'>
                    <img className='h-[150px]' src={img2} alt="img1" />
                    <p className='text-2xl sm:text-3xl'>Company</p>
                    <p className='text-2xl sm:text-3xl font-bold'>25%</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-5 bg-[#009f32] h-[300px] sm:h-[350px]'>
                    <img className='h-[150px]' src={img3} alt="img1" />
                    <p className='text-2xl sm:text-3xl'>Charity</p>
                    <p className='text-2xl sm:text-3xl font-bold'>5%</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ProfitDistribution

