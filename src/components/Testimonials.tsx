
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Enrolling my child at Brilliant Minds Academy was one of the best decisions we've made. The teachers are incredibly dedicated and the curriculum is comprehensive. My daughter has shown remarkable improvement in both academics and confidence.",
    author: "Sarah Johnson",
    role: "Parent of 5th Grade Student",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    content: "The hostel facilities at Brilliant Minds Academy are excellent. My son feels at home and the wardens are very caring. The structured study time has helped improve his grades significantly.",
    author: "Robert Williams",
    role: "Parent of 8th Grade Student",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    content: "The transportation service has been a blessing for our family. The buses are always on time, and the drivers are professional and friendly. I never worry about my daughter's commute to school.",
    author: "Emily Thompson",
    role: "Parent of 3rd Grade Student",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    id: 4,
    content: "As an alumnus of Brilliant Minds Academy, I can confidently say that the education I received has shaped my career. The values and discipline instilled in me during my time there continue to guide me today.",
    author: "Michael Chen",
    role: "Alumni, Class of 2015",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    id: 5,
    content: "The extracurricular activities at Brilliant Minds Academy are diverse and engaging. My son has discovered his passion for music through the school's excellent arts program.",
    author: "Jennifer Davis",
    role: "Parent of 7th Grade Student",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-school-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            What Parents <span className="text-school-accent">Say About Us</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our school community has to say about their experience with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10">
                    <Quote className="h-10 w-10 text-school-accent mb-6 opacity-80" />
                    <p className="text-white text-lg md:text-xl mb-8">{testimonial.content}</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author} 
                        className="w-14 h-14 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="text-white font-bold">{testimonial.author}</h4>
                        <p className="text-gray-300 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={goToPrevious}
            className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={goToNext}
            className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-school-accent' : 'bg-white/30 hover:bg-white/50'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
