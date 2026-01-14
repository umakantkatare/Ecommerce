import React from 'react'

const NewArrival = () => {
  return (
  <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">New Arrivals</h2>
              <p className="text-gray-600 mt-2">Check out our latest products</p>
            </div>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">View All →</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition cursor-pointer">
              <div className="text-6xl mb-3">👔</div>
              <h3 className="font-semibold text-gray-800">Premium Shirts</h3>
              <p className="text-sm text-gray-600 mt-1">Starting at $29.99</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition cursor-pointer">
              <div className="text-6xl mb-3">👗</div>
              <h3 className="font-semibold text-gray-800">Designer Dresses</h3>
              <p className="text-sm text-gray-600 mt-1">Starting at $49.99</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition cursor-pointer">
              <div className="text-6xl mb-3">🎮</div>
              <h3 className="font-semibold text-gray-800">Gaming Gear</h3>
              <p className="text-sm text-gray-600 mt-1">Starting at $39.99</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition cursor-pointer">
              <div className="text-6xl mb-3">📱</div>
              <h3 className="font-semibold text-gray-800">Smart Devices</h3>
              <p className="text-sm text-gray-600 mt-1">Starting at $99.99</p>
            </div>
          </div>
        </div>
      </section>  )
}

export default NewArrival