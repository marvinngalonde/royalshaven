import { Button } from "@/components/ui/button";
import { RotateCcw, Play } from "lucide-react";
import { useState } from "react";

const resortHero = '/images/resort-exterior.jpg';
const comfortableRooms = '/images/main-building.jpg';
const gazebootDining = '/images/gazebo-interior.jpg';
const beautifulGardens = '/images/manicured-gardens.jpg';

export default function Tour() {
  const [currentTourImage, setCurrentTourImage] = useState(0);

  const tourImages = [
    { src: resortHero, title: "Main Resort View", description: "Experience our stunning main building" },
    { src: beautifulGardens, title: "Beautiful Gardens", description: "Stroll through our tropical paradise" },
    { src: gazebootDining, title: "Gazebo Dining", description: "Dine in traditional African style" },
    { src: comfortableRooms, title: "Luxury Rooms", description: "Relax in comfort and elegance" },
    { src: '/images/garden-evening.jpg', title: 'Garden Evening', description: 'Twilight in the gardens' },
    { src: '/images/garden-paths.jpg', title: 'Garden Paths', description: 'Peaceful walking trails' },
    { src: '/images/garden-sunlight.jpg', title: 'Garden Sunlight', description: 'Sunlit garden views' },
    { src: '/images/garden-view.jpg', title: 'Garden View', description: 'Evening garden panorama' },
    { src: '/images/gazebo-interior.jpg', title: 'Gazebo Interior', description: 'Cozy dining inside the gazebo' },
    { src: '/images/landscape-view.jpg', title: 'Landscape View', description: 'Expansive grounds and landscapes' },
    { src: '/images/main-building.jpg', title: 'Main Building', description: 'The heart of the resort' },
    { src: '/images/manicured-gardens.jpg', title: 'Manicured Gardens', description: 'Well-tended lawns and flora' },
    { src: '/images/resort-exterior.jpg', title: 'Resort Exterior', description: 'Exterior view from the grounds' },
    { src: '/images/traditional-building.jpg', title: 'Traditional Building', description: 'Authentic architecture' }
  ];

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="tour" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Take a Virtual Tour</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Explore our resort in 360° and discover the beauty that awaits you at Royal Havens
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur">
            <div className="aspect-video relative">
              <img 
                src={tourImages[currentTourImage].src} 
                alt={tourImages[currentTourImage].title}
                className="w-full h-full object-cover transition-all duration-700 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{tourImages[currentTourImage].title}</h3>
                <p className="text-white/80">{tourImages[currentTourImage].description}</p>
              </div>
              <button 
                onClick={() => setCurrentTourImage((prev) => (prev + 1) % tourImages.length)}
                className="absolute top-1/2 right-6 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <RotateCcw className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {tourImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTourImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTourImage 
                    ? 'bg-accent scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => scrollToSection('contact')}
            >
              <Play className="w-4 h-4 mr-2" />
              Book Your Experience
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
