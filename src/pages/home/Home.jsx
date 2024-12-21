import React from 'react'
import { Header } from '../../components/layout/Header'
import { Banner } from '../../components/banner/Banner'
import Section1 from '../../components/sections/Section1'
import Section2 from '../../components/sections/Section2'
function Home() {
  return (
<>
   
    <Banner />
    <Section1/>
    <Section2/>

    <main className="pt-16">
      {/* Add some content to enable scrolling */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="bg-gray-100 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Section {i + 1}</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  
  </>
  )
}

export default Home