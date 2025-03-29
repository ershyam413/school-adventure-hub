
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-school-primary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                About Our School
              </h1>
              <p className="text-xl opacity-90">
                Brilliant Minds Academy has been a center of academic excellence and holistic development since 1995.
              </p>
            </div>
          </div>
        </section>
        
        {/* About Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-display font-bold text-school-dark mb-6">
                  Our <span className="text-school-primary">Story</span>
                </h2>
                <p className="text-gray-600 mb-4">
                  Founded in 1995 by a group of dedicated educators, Brilliant Minds Academy began with a simple mission: to provide quality education that nurtures both academic excellence and character development.
                </p>
                <p className="text-gray-600 mb-4">
                  What started as a small institution with just 50 students has now grown into a prestigious academy with over 1,500 students from playgroup to class ten. Despite our growth, we have maintained our commitment to individual attention and personalized learning.
                </p>
                <p className="text-gray-600">
                  Over the years, we have expanded our campus, upgraded our facilities, and enhanced our curriculum to meet the evolving needs of education. Today, we stand as a leading educational institution known for our academic rigor, innovative teaching methods, and holistic approach to education.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80" 
                  alt="School Building" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
            
            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-school-light p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-display font-bold text-school-dark mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide a stimulating learning environment that encourages critical thinking, creativity, and character development. We aim to empower our students with knowledge, skills, and values that will enable them to succeed in a rapidly changing world and contribute positively to society.
                </p>
              </div>
              <div className="bg-school-light p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-display font-bold text-school-dark mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be a center of educational excellence that nurtures well-rounded individuals who are academically proficient, morally upright, socially responsible, and globally competitive. We envision our students as future leaders who will make a difference in the world.
                </p>
              </div>
            </div>
            
            {/* Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-display font-bold text-school-dark text-center mb-12">
                Our Core <span className="text-school-primary">Values</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="bg-school-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-school-primary text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-school-dark mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for excellence in all we do, encouraging our students to reach their full potential.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="bg-school-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-school-primary text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-school-dark mb-2">Integrity</h3>
                  <p className="text-gray-600">
                    We uphold honesty, transparency, and ethical behavior in all our actions and interactions.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="bg-school-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-school-primary text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-school-dark mb-2">Respect</h3>
                  <p className="text-gray-600">
                    We value and respect the dignity and diversity of all individuals in our school community.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="bg-school-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-school-primary text-2xl font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-school-dark mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    We embrace creativity and innovation in teaching and learning to prepare students for the future.
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="text-center">
              <h2 className="text-3xl font-display font-bold text-school-dark mb-6">
                Join the Brilliant Minds Family
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                We invite you to be a part of our educational journey. Visit our campus, meet our teachers, and experience the Brilliant Minds difference.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-school-primary hover:bg-school-secondary text-white">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/academics">
                  <Button size="lg" variant="outline" className="border-school-primary text-school-primary hover:bg-school-light">
                    Explore Academics
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
