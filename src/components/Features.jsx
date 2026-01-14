import React from 'react'
import { Package,Shield,TrendingUp } from 'lucide-react'

const Features = () => {
  return (
 <section className="bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-around items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-full">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Secure Payment</h3>
                <p className="text-sm text-gray-600">100% secure transactions</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-3 rounded-full">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Best Prices</h3>
                <p className="text-sm text-gray-600">Guaranteed best deals</p>
              </div>
            </div>
          </div>
        </div>
      </section>  )
}

export default Features