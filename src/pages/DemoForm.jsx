const DemoForm = () => {
  return (
    <div className="flex justify-center pt-20 min-h-screen">
        <div className="container">
            <div className="grid grid-cols-2 gap-5 items-center">
                <div className="p-5">
                    <h1 className="text-4xl font-bold p-4">Book a Demo</h1>
                    <p className="p-5">Accelerate hiring with a personalized product tour. Our experts are ready to answer questions and help you discover the best solution for your hiring goals.</p>
                </div>
                <div>
                    <form className="p-6 m-6 rounded-lg shadow-lg bg-slate-600 w-full items-center text-white">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label>First Name</label>
                                <input className="p-3 bg-transparent border rounded-md focus-within:outline-2 focus-within:outline-white" required type="text" placeholder="Enter First Name" name="firstName"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label>Last Name</label>
                                <input className="p-3 bg-transparent border rounded-md focus-within:outline-4 focus-within:outline-white" type="text" placeholder="Enter Last Name" name="lastName"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label>Email</label>
                                <input className="p-3 bg-transparent border rounded-md focus-within:outline-4 focus-within:outline-white" type="email" placeholder="Enter Email address" name="email"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label>Phone</label>
                                <input className="p-3 bg-transparent border rounded-md focus-within:outline-4 focus-within:outline-white" type="phone" placeholder="Enter Phone Number" name="phone"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label>Company</label>
                                <input className="p-3 bg-transparent border rounded-md focus-within:outline-4 focus-within:outline-white" type="text" placeholder="Enter Company Name" name="company"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <lable>Hiring</lable>
                                <select className="border rounded-md p-3 bg-transparent focus-within:outline-4 focus-within:outline-white" name="hiring" id="hiring" placeholder="Select Option">
                                    <option>Less than 100</option>
                                    <option>100 - 600</option>
                                    <option>601-7999</option>
                                    <option>More than 8000</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col pt-4">
                                <label>How can we help your business</label>
                                <div className="grid grid-cols-2 gap-4 p-4">
                                    <label>
                                        <input type="checkbox" name="remoteI9" value="remoteI9"/> Remote I-9
                                    </label>
                                    <label>
                                        <input type="checkbox" name="autoformUpdates" value="autoformUpdates"/> Autoform Updates
                                    </label>
                                    <label>
                                        <input type="checkbox" name="eVerify" value="eVerify"/> E-Verify
                                    </label>
                                    <label>
                                        <input type="checkbox" name="ats" value="ats"/> ATS
                                    </label>
                                    <label>
                                        <input type="checkbox" name="onboarding" value="onboarding"/> Onboarding
                                    </label>
                                    <label>
                                        <input type="checkbox" name="selectall" value="selectall"/> Select All
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="items-center">
                            <button className="w-full bg-gradient-to-r from-sky-900 to-black py-2 px-10 my-10 rounded-full text-white hover:-translate-y-1 hover:scale-110 transition-all duration-300 ease-in-out hover:from-black hover:to-sky-900">Book a Demo</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DemoForm