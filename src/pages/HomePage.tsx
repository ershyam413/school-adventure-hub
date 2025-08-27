
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AcademicsSection from "@/components/AcademicsSection";
import TransportationSection from "@/components/TransportationSection";
import HostelSection from "@/components/HostelSection";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Welcome Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-school-dark mb-6">
                  Welcome to <span className="text-school-primary">Brilliant Minds Academy </span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Founded in 1995, Brilliant Minds Academy has been a center of academic excellence and holistic development for over 25 years. Our mission is to nurture each child's unique potential through a balanced approach to education that combines rigorous academics with character development.
                </p>
                <p className="text-gray-600 mb-6">
                  With a sprawling campus, state-of-the-art facilities, and a team of dedicated educators, we provide an environment where students from playgroup to class ten can thrive academically, socially, and emotionally.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-start">
                    <Calendar className="h-10 w-10 text-school-primary mr-3" />
                    <div>
                      <h3 className="font-bold text-school-dark">Established</h3>
                      <p className="text-gray-600">Since 1995</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-10 w-10 text-school-primary mr-3" />
                    <div>
                      <h3 className="font-bold text-school-dark">Campus</h3>
                      <p className="text-gray-600">10 Acres</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-10 w-10 text-school-primary mr-3" />
                    <div>
                      <h3 className="font-bold text-school-dark">Schedule</h3>
                      <p className="text-gray-600">Mon-Sat</p>
                    </div>
                  </div>
                </div>
                <Link to="/about">
                  <Button className="bg-school-primary hover:bg-school-secondary text-white">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80" 
                  alt="Students in classroom" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-school-primary text-white p-4 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <AcademicsSection />
        <Achievements />
        <TransportationSection />
        <HostelSection />
        <Testimonials />
        
        {/* Call to Action */}
        <section className="py-16 bg-school-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Join Our School?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Take the first step towards providing your child with an exceptional education. Contact us today to schedule a visit or learn more about our admission process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-school-primary hover:bg-school-accent hover:text-white">
                  Contact Us
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
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

export default HomePage;
