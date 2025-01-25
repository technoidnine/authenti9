import { CheckCircleIcon } from "lucide-react";

const SmartI9Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-6xl lg:text-7xl text-center text-sky-900 m-8">
        Authenti9 Onboarding Software Plans & Pricing
      </h2>
      <p className="text-gray-500 text-center m-8 w-auto">
        Whether a company needs Smart I-9 technology, speedy HR Onboarding, or an ATS to expand its talent pool, Authenti9 offers plans to suit every requirement and hiring volume.
      </p>
      <div className="flex flex-wrap mx-10">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className="p-10 bg-gray-400 rounded-xl shadow-2xl">
            <p className="text-4xl mb-8">Starter</p>
            <p className="my-2">Affordable I-9 pricing for companies hiring up to 100 per year</p>
            <p className="font-bold">Includes:</p>
            <div className="flex flex-row text-sky-900 my-2">
              <div>
                <CheckCircleIcon/>
              </div>
              <p className="mx-2">Smart I-9 with Optical Character Recognition (OCR) and geo-validated remote I-9 verification</p>
            </div>
            <div className="flex flex-row text-sky-900 my-2">
              <div>
                <CheckCircleIcon/>
              </div>
              <p className="mx-2">Up to five administrators</p>
            </div>
            <div className="flex flex-row text-sky-900 my-2">
              <div>
                <CheckCircleIcon/>
              </div>  
              <p className="mx-2">Robust reporting portal</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className="p-10 bg-gray-400 rounded-xl shadow-2xl">
            <p className="text-4xl mb-8">Growth</p>
            <p className="my-2">Affordable I-9 pricing for companies hiring up to 100 per year</p>
            <p className="font-bold">Includes:</p>
            <div className="flex flex-row text-sky-900 my-2">
              <div>
                <CheckCircleIcon/>
              </div>
              <p className="mx-2">Smart I-9 with OCR and geo-validated remote I-9 verification</p>
            </div>
            <div className="flex flex-row text-sky-900 my-2">
              <div>
                <CheckCircleIcon/>
              </div>
              <p className="mx-2">Unlimited administrators</p>
            </div>
            <div className="flex flex-row text-sky-900 my-2">
              <div>
                <CheckCircleIcon/>
              </div>  
              <p className="mx-2">E-Verify integration</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className="p-10 bg-gray-400 rounded-xl shadow-2xl">
            <p className="text-4xl mb-8">Premium</p>
            <p className="my-2">Affordable I-9 pricing for companies hiring up to 100 per year</p>
            <p className="font-bold">Includes:</p>
            <div className="flex flex-row text-sky-900 my-2">
              <div>
                <CheckCircleIcon/>
              </div>
              <p className="mx-2">Smart I-9 with OCR and geo-validated remote I-9 verification</p>
            </div>
            <div className="flex flex-row text-sky-900 my-2">
              <div>
                <CheckCircleIcon/>
              </div>
              <p className="mx-2">Unlimited administrators</p>
            </div>
            <div className="flex flex-row text-sky-900 my-2">
              <div>
                <CheckCircleIcon/>
              </div>  
              <p className="mx-2">E-Verify integration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmartI9Pricing