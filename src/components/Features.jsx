import React from 'react';
import { CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Smart Scheduling",
      description:
        "Easily organize your day with a drag-and-drop calendar that adapts to your workflow.",
    },
    {
      title: "Integrated Notes",
      description:
        "Attach detailed notes to your schedule so you never lose important context.",
    },
    {
      title: "Cloud Sync",
      description:
        "Your schedules and notes are securely stored and synced across all devices.",
    },
    {
      title: "Custom Reminders",
      description:
        "Set reminders for tasks and events so you never miss an important moment.",
    },
    {
      title: "Collaboration",
      description:
        "Share schedules with friends, family, or colleagues for easier planning.",
    },
    {
      title: "Offline Access",
      description:
        "Work anywhere, anytime, even without an internet connection.",
    },
  ];

  return (
    <div className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Powerful Features to Boost Your Productivity
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Everything you need to plan smarter, stay organized, and achieve more.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors border border-white/10"
            >
              <CheckCircle className="w-8 h-8 mb-4 text-[#00df9a]" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
