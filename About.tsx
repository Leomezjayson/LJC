import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/common/PageTransition';
import { Award, Target, Users, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About | Your Name";
  }, []);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gray-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/70"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">About Me</h1>
            <p className="text-xl text-gray-300 mb-8">
              CEO, Inventor, and Problem-Solver dedicated to creating innovative solutions that make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Your Name" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  As a visionary entrepreneur from Ghana, my journey began with a simple belief: innovation should solve real problems and create meaningful impact. With over 15 years of experience in business development and technology, I've dedicated my career to developing solutions that address challenges across Africa and beyond.
                </p>
                <p>
                  My approach combines deep market knowledge, technical expertise, and a passion for sustainable growth. I believe in building businesses that not only succeed financially but also contribute positively to communities and the environment.
                </p>
                <p>
                  Throughout my career, I've founded multiple successful ventures, mentored aspiring entrepreneurs, and collaborated with organizations committed to economic development in Africa. My work has been recognized with several awards and featured in leading publications.
                </p>
                <p>
                  Today, I continue to pursue my mission of driving innovation and fostering entrepreneurship across Ghana and the broader African continent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Core Values</h2>
            <p className="text-gray-600 text-lg">
              The principles that guide my approach to business, innovation, and problem-solving.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Target size={40} />, 
                title: "Innovation", 
                description: "Creating novel solutions that address real-world challenges and drive positive change." 
              },
              { 
                icon: <Award size={40} />, 
                title: "Excellence", 
                description: "Committing to the highest standards in everything I do, from product development to customer service." 
              },
              { 
                icon: <Users size={40} />, 
                title: "Community", 
                description: "Building and supporting communities through inclusive business practices and mentorship." 
              },
              { 
                icon: <Briefcase size={40} />, 
                title: "Integrity", 
                description: "Operating with honesty, transparency, and ethical business practices in all endeavors." 
              }
            ].map((value, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.1
              });
              
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-md"
                >
                  <div className="text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline/Achievements Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Journey & Milestones</h2>
            <p className="text-gray-600 text-lg">
              Key moments and achievements throughout my entrepreneurial career.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            {[
              {
                year: "2010",
                title: "First Venture",
                description: "Founded my first tech startup focused on mobile solutions for small businesses in Ghana."
              },
              {
                year: "2015",
                title: "Expansion & Growth",
                description: "Expanded operations to three additional African countries and secured major investment."
              },
              {
                year: "2018",
                title: "Innovation Award",
                description: "Received the African Innovation Prize for developing sustainable technology solutions."
              },
              {
                year: "2022",
                title: "E-commerce Platform",
                description: "Launched a comprehensive e-commerce platform connecting African artisans to global markets."
              },
              {
                year: "2025",
                title: "Media & Education",
                description: "Established educational initiatives and media content to empower aspiring entrepreneurs."
              }
            ].map((milestone, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.1
              });
              
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -20 : 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative mb-12 md:mb-24 ${isEven ? 'md:text-right' : ''}`}
                >
                  <div className={`md:w-1/2 ${isEven ? 'md:mr-auto pr-12' : 'md:ml-auto md:pl-12'}`}>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-primary">
                      <span className="inline-block bg-primary text-white text-sm font-medium py-1 px-3 rounded mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute top-6 left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;