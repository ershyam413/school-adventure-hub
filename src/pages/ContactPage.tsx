
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "Thank you for contacting us. We will get back to you soon.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-school-primary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl opacity-90">
                We're here to answer any questions you may have about our school, admission process, or facilities.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-display font-bold text-school-dark mb-6">
                  Send Us a <span className="text-school-primary">Message</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-primary focus:border-school-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-primary focus:border-school-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-primary focus:border-school-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-primary focus:border-school-primary"
                      >
                        <option value="">Select Subject</option>
                        <option value="Admission Enquiry">Admission Enquiry</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Hostel">Hostel</option>
                        <option value="Academics">Academics</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-primary focus:border-school-primary"
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button type="submit" className="w-full bg-school-primary hover:bg-school-secondary text-white">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-display font-bold text-school-dark mb-6">
                  Get in <span className="text-school-primary">Touch</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-school-light p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-school-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-school-dark mb-1">Our Address</h3>
                      <p className="text-gray-600">
                        123 Education Street, Academic District<br />
                        City, 12345<br />
                        Country
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-school-light p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-school-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-school-dark mb-1">Email Us</h3>
                      <p className="text-gray-600">
                        General Enquiries: info@brilliantminds.edu<br />
                        Admissions: admissions@brilliantminds.edu<br />
                        Support: support@brilliantminds.edu
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-school-light p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-school-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-school-dark mb-1">Call Us</h3>
                      <p className="text-gray-600">
                        Main Office: +1 (555) 123-4567<br />
                        Admissions: +1 (555) 123-4568<br />
                        Hostel: +1 (555) 123-4569
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-school-light p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-school-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-school-dark mb-1">Working Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 7:30 AM - 4:00 PM<br />
                        Saturday: 8:00 AM - 12:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="mt-8">
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">Map Goes Here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
