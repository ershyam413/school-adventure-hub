
import { Medal, Trophy, Award, Users, BookOpen } from "lucide-react";

const achievements = [
  {
    icon: <Trophy className="w-8 h-8 text-school-accent" />,
    title: "National Math Olympiad Winner",
    description: "Our students have been consecutive winners at the National Mathematics Olympiad for the past 5 years."
  },
  {
    icon: <Award className="w-8 h-8 text-school-accent" />,
    title: "Science Fair Champions",
    description: "Claimed first place in the Regional Science Fair with innovative projects on renewable energy."
  },
  {
    icon: <Medal className="w-8 h-8 text-school-accent" />,
    title: "Sports Excellence",
    description: "Our cricket and basketball teams have won multiple district and state level championships."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-school-accent" />,
    title: "Academic Excellence",
    description: "100% pass rate in board examinations with over 75% students achieving distinction marks."
  },
  {
    icon: <Users className="w-8 h-8 text-school-accent" />,
    title: "Community Service",
    description: "Our students have contributed over 5,000 hours of community service in the past academic year."
  }
];

const Achievements = () => {
  return (
    <section className="py-16 bg-school-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-school-dark mb-4">
            Our <span className="text-school-primary">Achievements</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We take pride in the accomplishments of our students and staff, which reflect our commitment to excellence in education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-bold text-school-dark mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
