import { Routes, Route } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SmartI9Pricing from '../pages/SmartI9Pricing';
import HROnboarding from '../pages/HROnboarding';
import OnboardingFormPricing from '../pages/OnboardingFormPricing';


export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<HeroSection/>}/>
        <Route path='/pricing/smart-i9' element={<SmartI9Pricing />}/>
        <Route path='/hr-onboarding' element={<HROnboarding />}/>
        <Route path='/onboarding-pricing' element={<OnboardingFormPricing />}/>
    </Routes>
    </>
  )
}
