
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Users, Calendar } from "lucide-react";

const AcademicsPage = () => {
  const { level } = useParams();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-school-primary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Academic Excellence
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Our comprehensive curriculum is designed to nurture students at every stage of their educational journey, from playgroup to class ten.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-school-primary hover:bg-school-accent hover:text-white">
                    Admission Enquiry
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Level Specific Content */}
        {level ? (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-school-dark mb-8">
                {level.charAt(0).toUpperCase() + level.slice(1).replace('-', ' ')} Program
              </h2>
              
              <div className="bg-school-light p-8 rounded-lg shadow-md">
                <p className="text-lg text-gray-600 mb-8">
                  Content for {level.replace('-', ' ')} will be coming soon. Please check back later or contact us for more information.
                </p>
                <Link to="/academics">
                  <Button className="bg-school-primary hover:bg-school-secondary text-white">
                    Back to Academics
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-school-dark text-center mb-12">
                Our Academic <span className="text-school-primary">Programs</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-school-light p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-6">
                    <Users className="h-12 w-12 text-school-accent mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-school-dark">Playgroup</h3>
                      <p className="text-school-primary">Ages 3-4</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Our playgroup program focuses on developing social, emotional, and motor skills through play-based learning in a nurturing environment.
                  </p>
                  <Link to="/academics/playgroup">
                    <Button className="bg-school-primary hover:bg-school-secondary text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
                
                <div className="bg-school-light p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-6">
                    <BookOpen className="h-12 w-12 text-school-accent mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-school-dark">Primary School</h3>
                      <p className="text-school-primary">Classes 1-5</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    The primary section builds a strong foundation in core subjects while nurturing creativity and critical thinking through engaging activities.
                  </p>
                  <Link to="/academics/primary">
                    <Button className="bg-school-primary hover:bg-school-secondary text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
                
                <div className="bg-school-light p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-6">
                    <Calendar className="h-12 w-12 text-school-accent mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-school-dark">Middle School</h3>
                      <p className="text-school-primary">Classes 6-8</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Our middle school curriculum deepens academic knowledge while helping students develop independent learning and problem-solving skills.
                  </p>
                  <Link to="/academics/middle">
                    <Button className="bg-school-primary hover:bg-school-secondary text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
                
                <div className="bg-school-light p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-6">
                    <GraduationCap className="h-12 w-12 text-school-accent mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-school-dark">Secondary School</h3>
                      <p className="text-school-primary">Classes 9-10</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    The secondary program prepares students for board examinations with rigorous academics and targeted exam preparation strategies.
                  </p>
                  <Link to="/academics/secondary">
                    <Button className="bg-school-primary hover:bg-school-secondary text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default AcademicsPage;
