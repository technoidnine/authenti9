import { useNavigate } from "react-router-dom";

const HeroSection = () => {

  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto p-8 pt-20 px-12">
      <section className="flex flex-col w-full h-screen items-center mt-6 lg:mt-20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center">
              Radically simple I-9 verification services
          </h1>
          <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
              Get new hires to work faster with Smart I-9 verification software. Ensure compliance and cut down on manual tasks with a mobile-friendly, remote process.
          </p>
          <button onClick={() => navigate('/book-a-demo')} className="bg-gradient-to-r from-sky-900 to-black py-2 px-10 my-10 rounded-full text-white hover:-translate-y-1 hover:scale-110 transition-all duration-300 ease-in-out hover:from-black hover:to-sky-900">Book a Demo</button>
      </section>
      <section className="flex flex-col w-full h-screen items-center mt-6 lg:mt-20">
        <p>The new standard for speed</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center">
          Next-generation employee verification
        </h1>
      </section>
    </div>
  )
}

export default HeroSection