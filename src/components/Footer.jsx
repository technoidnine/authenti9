
const Footer = () => {
  return (
    <div className="mt-20 border-t py-10 border-neutral-700 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mx-8">
            <div>
                <h3 className="text-md font-semibold mb-4 text-sky-900">
                    Products
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><a>Smart I-9</a></li>
                    <li><a>HR Onboarding</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-md font-semibold mb-4 text-sky-900">
                    Pricing
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><a>Smart I-9 Pricing</a></li>
                    <li><a>Onboarding Forms Pricing</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer