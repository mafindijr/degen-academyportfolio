
import Header from "./components/header"
import HeroSection from "./components/hero-section"
import CoreValues from "./components/core-values"
import Courses from "./components/courses"

export default function App() {
  return (
    <div 
    className="relative flex h-auto min-h-screen w-full flex-col bg-[#111618] dark group/design-root overflow-x-hidden" 
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
        <div className="layout-container flex h-full grow flex-col">
            <Header />
            <HeroSection />
            <CoreValues />
            <Courses />
        </div>

    </div>
  )
}
