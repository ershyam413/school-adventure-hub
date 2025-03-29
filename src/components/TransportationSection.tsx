
import { Bus, MapPin, Clock, Shield, CreditCard, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const TransportationSection = () => {
  const features = [
    {
      icon: <Bus className="h-8 w-8 text-school-accent" />,
      title: "Modern Fleet",
      description: "Our fleet of well-maintained buses ensures safe and comfortable transportation for all students."
    },
    {
      icon: <MapPin className="h-8 w-8 text-school-accent" />,
      title: "Extensive Routes",
      description: "We cover all major areas and neighborhoods to ensure convenient access for all students."
    },
    {
      icon: <Clock className="h-8 w-8 text-school-accent" />,
      title: "Punctual Service",
      description: "Our transportation system runs on a strict schedule to ensure students arrive on time."
    },
    {
      icon: <Shield className="h-8 w-8 text-school-accent" />,
      title: "Safety First",
      description: "All vehicles are equipped with GPS tracking, first aid kits, and trained attendants."
    },
    {
      icon: <CreditCard className="h-8 w-8 text-school-accent" />,
      title: "Affordable Rates",
      description: "We offer competitive transportation fees with flexible payment options for parents."
    },
    {
      icon: <Phone className="h-8 w-8 text-school-accent" />,
      title: "24/7 Support",
      description: "Our transportation department is always available to address any concerns or emergencies."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-school-dark mb-4">
            School <span className="text-school-primary">Transportation</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide safe, reliable, and convenient transportation services for our students, making the daily commute worry-free for parents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-school-light p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-school-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-school-primary rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Transportation Routes</h3>
              <p className="mb-6">Our buses operate on multiple routes covering all major areas of the city. Check if your area is covered by our transportation service.</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-school-accent mr-3"></div>
                  <span>North Route: 7:00 AM - Areas A, B, C</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-school-accent mr-3"></div>
                  <span>South Route: 7:15 AM - Areas D, E, F</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-school-accent mr-3"></div>
                  <span>East Route: 7:30 AM - Areas G, H, I</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-school-accent mr-3"></div>
                  <span>West Route: 6:45 AM - Areas J, K, L</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-school-accent mr-3"></div>
                  <span>Central Route: 7:45 AM - Areas M, N, O</span>
                </div>
              </div>
              
              <Button className="bg-white text-school-primary hover:bg-school-accent hover:text-white transition-colors">
                View Detailed Routes
              </Button>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="School Transportation" 
                className="h-full w-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportationSection;
