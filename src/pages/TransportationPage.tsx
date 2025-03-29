
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bus, Shield, Clock, MapPin, Headphones, DollarSign } from "lucide-react";

const TransportationPage = () => {
  const faqs = [
    {
      question: "What are the transportation fees?",
      answer: "Transportation fees vary based on the distance from school. We have different zones with different fee structures. Please contact our transport department for specific details."
    },
    {
      question: "How can I track my child's bus?",
      answer: "We provide a mobile app for parents to track the school bus in real-time. You will receive credentials for the app after enrolling in our transportation service."
    },
    {
      question: "What safety measures are in place?",
      answer: "All buses are equipped with GPS tracking, first aid kits, fire extinguishers, and speed governors. We also have trained attendants on every bus and conduct regular safety drills."
    },
    {
      question: "What if I need to change my child's pickup or drop-off point?",
      answer: "Parents can request changes to pickup or drop-off points by submitting a form at least one week in advance. Changes are subject to route availability."
    },
    {
      question: "What happens if my child misses the bus?",
      answer: "If a child misses the morning bus, parents are responsible for bringing them to school. If a child misses the afternoon bus, they will be kept in the school's waiting area and parents will be notified immediately."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-school-primary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Safe & Reliable School Transportation
                </h1>
                <p className="text-xl opacity-90 mb-8">
                  We provide safe, punctual, and comfortable transportation services for students from all parts of the city.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-white text-school-primary hover:bg-school-accent hover:text-white">
                      Enquire Now
                    </Button>
                  </Link>
                  <a href="#routes">
                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                      View Routes
                    </Button>
                  </a>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80" 
                  alt="School Bus" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-school-dark text-center mb-12">
              Our Transportation <span className="text-school-primary">Services</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-school-light p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Bus className="h-12 w-12 text-school-accent mb-6" />
                <h3 className="text-xl font-bold text-school-dark mb-3">Modern Fleet</h3>
                <p className="text-gray-600">
                  Our fleet consists of well-maintained, air-conditioned buses that are regularly serviced to ensure reliability and comfort.
                </p>
              </div>
              
              <div className="bg-school-light p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Shield className="h-12 w-12 text-school-accent mb-6" />
                <h3 className="text-xl font-bold text-school-dark mb-3">Safety First</h3>
                <p className="text-gray-600">
                  Safety is our top priority. All buses are equipped with GPS tracking, first aid kits, and trained attendants to ensure student safety.
                </p>
              </div>
              
              <div className="bg-school-light p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Clock className="h-12 w-12 text-school-accent mb-6" />
                <h3 className="text-xl font-bold text-school-dark mb-3">Punctual Service</h3>
                <p className="text-gray-600">
                  We pride ourselves on punctuality. Our buses follow strict schedules to ensure students arrive at school and home on time.
                </p>
              </div>
              
              <div className="bg-school-light p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="h-12 w-12 text-school-accent mb-6" />
                <h3 className="text-xl font-bold text-school-dark mb-3">Extensive Routes</h3>
                <p className="text-gray-600">
                  We cover all major areas of the city with carefully planned routes to minimize travel time and maximize convenience.
                </p>
              </div>
              
              <div className="bg-school-light p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Headphones className="h-12 w-12 text-school-accent mb-6" />
                <h3 className="text-xl font-bold text-school-dark mb-3">24/7 Support</h3>
                <p className="text-gray-600">
                  Our transportation department is available around the clock to address any concerns or emergencies that may arise.
                </p>
              </div>
              
              <div className="bg-school-light p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <DollarSign className="h-12 w-12 text-school-accent mb-6" />
                <h3 className="text-xl font-bold text-school-dark mb-3">Affordable Rates</h3>
                <p className="text-gray-600">
                  We offer competitive transportation fees with flexible payment options to accommodate different family budgets.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Routes Section */}
        <section id="routes" className="py-16 bg-school-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-school-dark text-center mb-12">
              Our Bus <span className="text-school-primary">Routes</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-school-dark mb-6">Morning Pickup Routes</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-school-primary mb-2">North Route</h4>
                    <p className="text-gray-600 mb-2">Areas Covered: A, B, C</p>
                    <p className="text-gray-600 mb-2">Pickup Time: 7:00 AM - 7:30 AM</p>
                    <p className="text-gray-600">Bus Numbers: 101, 102</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-school-primary mb-2">South Route</h4>
                    <p className="text-gray-600 mb-2">Areas Covered: D, E, F</p>
                    <p className="text-gray-600 mb-2">Pickup Time: 7:15 AM - 7:45 AM</p>
                    <p className="text-gray-600">Bus Numbers: 103, 104</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-school-primary mb-2">East Route</h4>
                    <p className="text-gray-600 mb-2">Areas Covered: G, H, I</p>
                    <p className="text-gray-600 mb-2">Pickup Time: 7:30 AM - 8:00 AM</p>
                    <p className="text-gray-600">Bus Numbers: 105, 106</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-school-primary mb-2">West Route</h4>
                    <p className="text-gray-600 mb-2">Areas Covered: J, K, L</p>
                    <p className="text-gray-600 mb-2">Pickup Time: 6:45 AM - 7:15 AM</p>
                    <p className="text-gray-600">Bus Numbers: 107, 108</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-school-primary mb-2">Central Route</h4>
                    <p className="text-gray-600 mb-2">Areas Covered: M, N, O</p>
                    <p className="text-gray-600 mb-2">Pickup Time: 7:45 AM - 8:15 AM</p>
                    <p className="text-gray-600">Bus Numbers: 109, 110</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-school-dark mb-6">Afternoon Drop-off Routes</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-school-primary mb-2">North Route</h4>
                    <p className="text-gray-600 mb-2">Areas Covered: A, B, C</p>
                    <p className="text-gray-600 mb-2">Drop-off Time: 3:00 PM - 3:30 PM</p>
                    <p className="text-gray-600">Bus Numbers: 101, 102</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-school-primary mb-2">South Route</h4>
                    <p className="text-gray-600 mb-2">Areas Covered: D, E, F</p>
                    <p className="text-gray-600 mb-2">Drop-off Time: 3:15 PM - 3:45 PM</p>
                    <p className="text-gray-600">Bus Numbers: 103, 104</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-school-primary mb-2">East Route</h4>
                    <p className="text-gray-600 mb-2">Areas Covered: G, H, I</p>
                    <p className="text-gray-600 mb-2">Drop-off Time: 3:30 PM - 4:00 PM</p>
                    <p className="text-gray-600">Bus Numbers: 105, 106</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-school-primary mb-2">West Route</h4>
                    <p className="text-gray-600 mb-2">Areas Covered: J, K, L</p>
                    <p className="text-gray-600 mb-2">Drop-off Time: 2:45 PM - 3:15 PM</p>
                    <p className="text-gray-600">Bus Numbers: 107, 108</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-school-primary mb-2">Central Route</h4>
                    <p className="text-gray-600 mb-2">Areas Covered: M, N, O</p>
                    <p className="text-gray-600 mb-2">Drop-off Time: 3:45 PM - 4:15 PM</p>
                    <p className="text-gray-600">Bus Numbers: 109, 110</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-school-dark text-center mb-12">
              Frequently Asked <span className="text-school-primary">Questions</span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-school-light p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-school-dark mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-school-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              Ready to Enroll Your Child in Our Transportation Service?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Contact our transportation department today to discuss your requirements and get detailed information about routes and fees.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-school-primary hover:bg-school-accent hover:text-white">
                Contact Transportation Department
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TransportationPage;
