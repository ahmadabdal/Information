import React from "react";
import type { Achievement } from "../types";
import { CodeIcon, UsersIcon, TrophyIcon, BriefcaseIcon } from "./Icons";

const achievementsData: Achievement[] = [
  {
    icon: <BriefcaseIcon className="w-8 h-8 text-cyan-400" />,
    title: "React Native App Migration",
    description:
      "Migrated a large-scale native Android/iOS app to React Native, reducing maintenance overhead by 30% and enabling seamless cross-platform performance.",
  },
  {
    icon: <CodeIcon className="w-8 h-8 text-cyan-400" />,
    title: "Performance Optimization",
    description:
      "Improved app load time by 40% through efficient state management with Redux and optimized API integrations.",
  },
  {
    icon: <TrophyIcon className="w-8 h-8 text-cyan-400" />,
    title: "Feature Development Impact",
    description:
      "Delivered key Mahadhan Farmer App features—including a rich media story module—that boosted user engagement by 25%.",
  },
  {
    icon: <UsersIcon className="w-8 h-8 text-cyan-400" />,
    title: "MBA in Data Science (Ongoing)",
    description:
      "Pursuing an MBA in Analytics & Data Science to strengthen business acumen and advanced data-driven decision-making skills.",
  },
];

const AchievementCard: React.FC<{ achievement: Achievement }> = ({
  achievement,
}) => (
  <div className="bg-slate-800/50 p-6 rounded-lg flex items-start space-x-4 shadow-none">
    <div className="flex-shrink-0">{achievement.icon}</div>
    <div>
      <h3 className="font-bold text-lg text-slate-100">
        {achievement.title}
      </h3>
      <p className="text-slate-400">{achievement.description}</p>
    </div>
  </div>
);

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Achievements
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievementsData.map((ach) => (
          <AchievementCard key={ach.title} achievement={ach} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
