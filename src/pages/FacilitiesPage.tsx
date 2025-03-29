
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Dumbbell, Beaker, Laptop, Music, Palette, Utensils, Stethoscope } from "lucide-react";

const FacilitiesPage = () => {
  const facilities = [
    {
      icon: <BookOpen className="h-12 w-12 text-school-accent" />,
      title: "Modern Library",
      description: "Our library houses over 10,000 books, digital resources, and comfortable reading spaces to nurture a love for reading and research."
    },
    {
      icon: <Laptop className="h-12 w-12 text-school-accent" />,
      title: "Computer Labs",
      description: "State-of-the-art computer labs with high-speed internet and the latest software to develop digital literacy and technical skills."
    },
    {
      icon: <Beaker className="h-12 w-12 text-school-accent" />,
      title: "Science Laboratories",
      description: "Well-equipped physics, chemistry, and biology labs with modern equipment for practical learning and experiments."
    },
    {
      icon: <Dumbbell className="h-12 w-12 text-school-accent" />,
      title: "Sports Facilities",
      description: "Extensive sports facilities including a playground, indoor games area, basketball court, and cricket pitch."
    },
    {
      icon: <Music className="h-12 w-12 text-school-accent" />,
      title: "Music Room",
      description: "A dedicated music room with various instruments where students can explore and develop their musical talents."
    },
    {
      icon: <Palette className="h-12 w-12 text-school-accent" />,
      title: "Art Studio",
      description: "A spacious art studio that provides an inspiring environment for students to express their creativity."
    },
    {
      icon: <Utensils className="h-12 w-12 text-school-accent" />,
      title: "Cafeteria",
      description: "A hygienic cafeteria serving nutritious and delicious meals prepared under strict quality standards."
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-school-accent" />,
      title: "Medical Room",
      description: "A well-equipped medical room with a full-time nurse to handle emergencies and routine health check-ups."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-school-primary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Our Facilities
              </h1>
              <p className="text-xl opacity-90">
                We provide world-class facilities that create an optimal environment for learning, growth, and development.
              </p>
            </div>
          </div>
        </section>
        
        {/* Facilities Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-school-dark mb-4">
                State-of-the-Art <span className="text-school-primary">Facilities</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At Brilliant Minds Academy, we have invested in creating a campus that supports holistic education and provides students with everything they need to excel.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-school-light p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="mb-6">{facility.icon}</div>
                  <h3 className="text-xl font-bold text-school-dark mb-3">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Want to see our facilities in person? Schedule a campus tour to experience our campus firsthand.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-school-primary hover:bg-school-secondary text-white">
                  Schedule a Tour
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FacilitiesPage;
