
import React from 'react';

interface FeatureSectionProps {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ name, description, icon }) => {
  return (
    <div className="flex flex-col">
      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
        <div className="h-10 w-10 flex-none rounded-lg bg-green-500/20 flex items-center justify-center">
          {icon}
        </div>
        {name}
      </dt>
      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
        <p className="flex-auto">{description}</p>
        <p className="mt-6">
          <a href="#" className="text-sm font-semibold leading-6 text-green-400 hover:text-green-300 transition-colors">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </p>
      </dd>
    </div>
  );
};

export default FeatureSection;
