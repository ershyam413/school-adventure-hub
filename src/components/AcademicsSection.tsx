
import { GraduationCap, BookOpen, Calendar, Users, Award, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AcademicsSection = () => {
  const academicLevels = [
    {
      level: "Playgroup",
      age: "Ages 3-4",
      description: "Our playgroup program focuses on developing social, emotional, and motor skills through play-based learning in a nurturing environment.",
      highlights: ["Play-based learning", "Basic language skills", "Motor skill development", "Social interaction"],
      icon: <Users className="h-10 w-10 text-school-accent" />
    },
    {
      level: "Primary School",
      age: "Classes 1-5",
      description: "The primary section builds a strong foundation in core subjects while nurturing creativity and critical thinking through engaging activities.",
      highlights: ["Core subject foundation", "Creative arts", "Physical education", "Computer literacy"],
      icon: <BookOpen className="h-10 w-10 text-school-accent" />
    },
    {
      level: "Middle School",
      age: "Classes 6-8",
      description: "Our middle school curriculum deepens academic knowledge while helping students develop independent learning and problem-solving skills.",
      highlights: ["Advanced academics", "Project-based learning", "Science experiments", "Public speaking"],
      icon: <BarChart className="h-10 w-10 text-school-accent" />
    },
    {
      level: "Secondary School",
      age: "Classes 9-10",
      description: "The secondary program prepares students for board examinations with rigorous academics and targeted exam preparation strategies.",
      highlights: ["Board exam preparation", "Career counseling", "Advanced labs", "Leadership opportunities"],
      icon: <GraduationCap className="h-10 w-10 text-school-accent" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-school-dark mb-4">
            Academic <span className="text-school-primary">Excellence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum is designed to nurture students at every stage of their educational journey, from playgroup to class ten.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {academicLevels.map((level, index) => (
            <div key={index} className="bg-school-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:p-8 flex-1">
                  <div className="mb-4">{level.icon}</div>
                  <h3 className="text-2xl font-bold text-school-dark mb-1">{level.level}</h3>
                  <p className="text-school-primary font-medium mb-3">{level.age}</p>
                  <p className="text-gray-600 mb-4">{level.description}</p>
                  <ul className="space-y-2">
                    {level.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-school-primary mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index % 2 === 0 && (
                  <div className="md:w-1/3 bg-school-primary flex items-center justify-center p-8">
                    <div className="text-white text-center">
                      <Calendar className="h-12 w-12 mx-auto mb-3" />
                      <div className="text-lg font-bold mb-1">Class Schedule</div>
                      <p className="text-sm opacity-80">View detailed class schedule and curriculum</p>
                      <Link to={`/academics/${level.level.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button variant="outline" className="mt-4 text-white border-white hover:bg-white/10">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
                {index % 2 !== 0 && (
                  <div className="md:w-1/3 bg-school-secondary flex items-center justify-center p-8">
                    <div className="text-white text-center">
                      <Award className="h-12 w-12 mx-auto mb-3" />
                      <div className="text-lg font-bold mb-1">Student Achievements</div>
                      <p className="text-sm opacity-80">Discover the success stories of our students</p>
                      <Link to={`/academics/${level.level.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button variant="outline" className="mt-4 text-white border-white hover:bg-white/10">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/academics">
            <Button size="lg" className="bg-school-primary hover:bg-school-secondary text-white">
              Explore All Academic Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
