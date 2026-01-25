import React from "react";
import { Package, Shield, TrendingUp } from "lucide-react";

const Features = () => {
  const items = [
    {
      id: 1,
      title: "Free Shipping",
      description: "On orders over $50",
      Icon: Package,
      wrapperBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      title: "Secure Payment",
      description: "100% secure transactions",
      Icon: Shield,
      wrapperBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: 3,
      title: "Best Prices",
      description: "Guaranteed best deals",
      Icon: TrendingUp,
      wrapperBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];
  return (
    <section className="bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1  md:grid-cols-3 gap-6 place-items-center">
          {items.map(
            ({ id, title, description, Icon, wrapperBg, iconColor }) => (
              <div key={id} className="flex items-center gap-4">
                <div className={`${wrapperBg} p-3 rounded-full shrink-0`}>
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                    {title}
                  </h3>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    {description}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
