
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bed, Utensils, Users, BookOpen, Heart, Wifi, Clock, Calendar, Laugh, Home } from "lucide-react";

const HostelPage = () => {
  const facilities = [
    {
      icon: <Bed className="h-12 w-12 text-school-accent" />,
      title: "Comfortable Accommodation",
      description: "Well-furnished rooms with comfortable beds, study tables, and storage space for personal belongings."
    },
    {
      icon: <Utensils className="h-12 w-12 text-school-accent" />,
      title: "Nutritious Meals",
      description: "Three balanced meals a day prepared under strict hygiene standards to ensure proper nutrition."
    },
    {
      icon: <Users className="h-12 w-12 text-school-accent" />,
      title: "24/7 Supervision",
      description: "Experienced and caring wardens provide round-the-clock supervision and support."
    },
    {
      icon: <BookOpen className="h-12 w-12 text-school-accent" />,
      title: "Study Hours",
      description: "Dedicated study hours with qualified tutors available to assist with homework and exam preparation."
    },
    {
      icon: <Heart className="h-12 w-12 text-school-accent" />,
      title: "Healthcare",
      description: "On-campus medical facility with a nurse available 24/7 and regular health check-ups."
    },
    {
      icon: <Wifi className="h-12 w-12 text-school-accent" />,
      title: "Wi-Fi & Computer Lab",
      description: "Access to Wi-Fi and a well-equipped computer lab for academic research and assignments."
    }
  ];

  const testimonials = [
    {
      content: "The hostel at Brilliant Minds Academy has been a wonderful home away from home for my son. The facilities are excellent, the wardens are attentive, and the environment is conducive to both learning and personal growth.",
      author: "Mrs. Thompson",
      role: "Parent of a Class 8 Student"
    },
    {
      content: "Living in the school hostel has helped me become more independent and responsible. The scheduled study hours have improved my academic performance, and I've made great friends here.",
      author: "Aryan Kumar",
      role: "Class 9 Student"
    },
    {
      content: "As a parent who lives abroad, I was concerned about my daughter's well-being. But the hostel staff has been like family to her, providing care, support, and guidance. The regular updates I receive from the wardens are reassuring.",
      author: "Mr. Patel",
      role: "Parent of a Class 6 Student"
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
                  A Home Away From Home
                </h1>
                <p className="text-xl opacity-90 mb-8">
                  Our hostel provides a safe, nurturing, and supportive environment where students can thrive academically and personally.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-white text-school-primary hover:bg-school-accent hover:text-white">
                      Enquire Now
                    </Button>
                  </Link>
                  <a href="#facilities">
                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                      View Facilities
                    </Button>
                  </a>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80" 
                  alt="Hostel Common Area" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-school-dark mb-6">
                Hostel <span className="text-school-primary">Life at Brilliant Minds</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At Brilliant Minds Academy, we understand that a hostel is not just a place to stay—it's a home where students learn, grow, and create lasting memories. Our hostel provides a balanced environment that fosters academic excellence, personal development, and a sense of community.
              </p>
              <p className="text-lg text-gray-600">
                From playgroup to class ten, we offer age-appropriate accommodation with facilities and support tailored to the needs of different age groups. Our dedicated wardens and staff ensure that each child receives individual attention and care.
              </p>
            </div>
          </div>
        </section>
        
        {/* Facilities */}
        <section id="facilities" className="py-16 bg-school-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-school-dark text-center mb-12">
              Hostel <span className="text-school-primary">Facilities</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-6">{facility.icon}</div>
                  <h3 className="text-xl font-bold text-school-dark mb-3">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Schedule */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-school-dark text-center mb-12">
              Daily <span className="text-school-primary">Schedule</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="bg-school-light p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-school-dark mb-6 flex items-center">
                    <Clock className="h-6 w-6 mr-2 text-school-primary" />
                    Weekday Schedule
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">6:00 AM</div>
                      <div>Wake-up Call</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">6:30 AM</div>
                      <div>Morning Exercise/Yoga</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">7:15 AM</div>
                      <div>Breakfast</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">8:00 AM</div>
                      <div>School Hours Begin</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">12:30 PM</div>
                      <div>Lunch</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">3:30 PM</div>
                      <div>School Hours End</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">4:00 PM</div>
                      <div>Snacks & Recreation</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">5:30 PM</div>
                      <div>Study Hours</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">7:30 PM</div>
                      <div>Dinner</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">8:30 PM</div>
                      <div>Free Time/Additional Study</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">9:30 PM</div>
                      <div>Prepare for Bed</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">10:00 PM</div>
                      <div>Lights Out</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-school-light p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-school-dark mb-6 flex items-center">
                    <Calendar className="h-6 w-6 mr-2 text-school-primary" />
                    Weekend Schedule
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">7:00 AM</div>
                      <div>Wake-up Call</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">7:30 AM</div>
                      <div>Morning Exercise/Yoga</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">8:15 AM</div>
                      <div>Breakfast</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">9:00 AM</div>
                      <div>Study Hours/Tutoring</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">11:00 AM</div>
                      <div>Co-curricular Activities</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">1:00 PM</div>
                      <div>Lunch</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">2:00 PM</div>
                      <div>Recreational Activities/Outings</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">5:00 PM</div>
                      <div>Free Time/Phone Calls to Parents</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">7:00 PM</div>
                      <div>Dinner</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">8:00 PM</div>
                      <div>Movie/Games Night</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">10:00 PM</div>
                      <div>Prepare for Bed</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-school-primary">10:30 PM</div>
                      <div>Lights Out</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Accommodation Options */}
        <section className="py-16 bg-school-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-school-dark text-center mb-12">
              Hostel <span className="text-school-primary">Accommodation Options</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Junior Block */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <Laugh className="h-16 w-16 text-school-primary mx-auto mb-2" />
                    <h3 className="text-xl font-bold text-school-dark">Junior Block</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-school-primary mb-2">For Playgroup to Class 3</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Shared rooms (2-3 students)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Special caregivers for younger children</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Age-appropriate play areas</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Early bedtime routine</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Special assistance with daily tasks</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Regular communication with parents</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Middle Block */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow relative">
                <div className="absolute top-0 right-0 bg-school-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
                <div className="h-48 bg-gradient-to-r from-blue-200 to-blue-300 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="h-16 w-16 text-school-primary mx-auto mb-2" />
                    <h3 className="text-xl font-bold text-school-dark">Middle Block</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-school-primary mb-2">For Class 4 to Class 7</h4>
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
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Guidance for personal development</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Weekly video calls with parents</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Senior Block */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-blue-300 to-blue-400 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="h-16 w-16 text-school-primary mx-auto mb-2" />
                    <h3 className="text-xl font-bold text-school-dark">Senior Block</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-school-primary mb-2">For Class 8 to Class 10</h4>
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
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Career counseling</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>More independent living</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-school-dark text-center mb-12">
              What Parents & Students <span className="text-school-primary">Say</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-school-light p-8 rounded-lg shadow-sm">
                  <div className="mb-4 text-school-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-6">{testimonial.content}</p>
                  <div>
                    <h4 className="font-bold text-school-dark">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Visit Us */}
        <section className="py-16 bg-school-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              Visit Our Hostel Facilities
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              We invite parents and prospective students to visit our hostel facilities and experience firsthand the comfortable and nurturing environment we provide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-school-primary hover:bg-school-accent hover:text-white">
                  Schedule a Visit
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
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

export default HostelPage;
