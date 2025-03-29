
import { Link } from "react-router-dom";
import { Bed, Utensils, Wifi, Users, BookOpen, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const HostelSection = () => {
  const features = [
    {
      icon: <Bed className="h-8 w-8 text-school-accent" />,
      title: "Comfortable Accommodation",
      description: "Well-furnished rooms with comfortable beds, study tables, and storage space for personal belongings."
    },
    {
      icon: <Utensils className="h-8 w-8 text-school-accent" />,
      title: "Nutritious Meals",
      description: "Three balanced meals a day prepared under strict hygiene standards to ensure proper nutrition."
    },
    {
      icon: <Wifi className="h-8 w-8 text-school-accent" />,
      title: "Wi-Fi & Computer Lab",
      description: "Access to Wi-Fi and a well-equipped computer lab for academic research and assignments."
    },
    {
      icon: <Users className="h-8 w-8 text-school-accent" />,
      title: "24/7 Supervision",
      description: "Experienced and caring wardens provide round-the-clock supervision and support."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-school-accent" />,
      title: "Study Hours",
      description: "Dedicated study hours with qualified tutors available to assist with homework and exam preparation."
    },
    {
      icon: <Heart className="h-8 w-8 text-school-accent" />,
      title: "Healthcare",
      description: "On-campus medical facility with a nurse available 24/7 and regular health check-ups."
    }
  ];

  return (
    <section className="py-16 bg-school-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-school-dark mb-4">
            Hostel <span className="text-school-primary">Facilities</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our hostel provides a home away from home, creating a safe, supportive, and nurturing environment for students from playgroup to class ten.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Hostel Facilities" 
              className="rounded-lg shadow-lg object-cover h-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-school-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hostel Plans */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-school-dark mb-6 text-center">Hostel Accommodation Plans</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Plan 1 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-school-primary transition-colors">
                <h4 className="text-xl font-bold text-school-primary mb-2">Junior Block</h4>
                <p className="text-gray-600 mb-4">For Playgroup to Class 3</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <span>Shared rooms (2-3 students)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <span>Special caregivers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <span>Age-appropriate activities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <span>Early bedtime routine</span>
                  </li>
                </ul>
              </div>
              
              {/* Plan 2 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-school-primary transition-colors relative">
                <div className="absolute top-0 right-0 bg-school-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
                <h4 className="text-xl font-bold text-school-primary mb-2">Middle Block</h4>
                <p className="text-gray-600 mb-4">For Class 4 to Class 7</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <span>Shared rooms (3-4 students)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <span>Supervised study hours</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <span>Recreational activities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <span>Weekend outings</span>
                  </li>
                </ul>
              </div>
              
              {/* Plan 3 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-school-primary transition-colors">
                <h4 className="text-xl font-bold text-school-primary mb-2">Senior Block</h4>
                <p className="text-gray-600 mb-4">For Class 8 to Class 10</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <span>Shared rooms (2 students)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <span>Extended study hours</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <span>Exam preparation support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <span>Leadership activities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-school-dark mb-4">Interested in Our Hostel Facilities?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact our hostel administration to schedule a visit or learn more about our accommodation options for your child.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-school-primary hover:bg-school-secondary text-white">
              Enquire Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HostelSection;
