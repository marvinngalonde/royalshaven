import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Phone, Mail, MapPin, Star, Wifi, Car, Users, TreePine, Utensils, Shield, Play, RotateCcw } from "lucide-react";
import { useState } from "react";
import Stack from "@/components/Stack";
import SplitText from "@/components/SplitText";
// removed direct imports of local assets; use public images instead
const resortHero = '/images/resort-exterior.jpg';
const comfortableRooms = '/images/main-building.jpg';
const gazebootDining = '/images/gazebo-interior.jpg';
const beautifulGardens = '/images/manicured-gardens.jpg';
import ReasonToStay from "@/components/reasonstosaty";
import Gallery from "./Gallery";
import About from "./About";
import Contact from "./Contact";
import Wellness from "./Wellness";
import Features from "./Features";
import Tour from "./Tour";
import Amenities from "./Amenities";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <header className="fixed w-full top-0 left-0 z-50 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold">ROYALS HAVEN</div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-accent transition-colors">Home</button>
               <button onClick={() => scrollToSection('gallery')} className="hover:text-accent transition-colors">Gallery</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors">About</button>
              <button onClick={() => scrollToSection('amenities')} className="hover:text-accent transition-colors">Amenities</button>
             
              <button onClick={() => scrollToSection('contact')} className="hover:text-accent transition-colors">Contact</button>
            </nav>
            <div className="flex items-center space-x-4">
              <span className="hidden md:inline">+263 712 150 979</span>
              <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    Book Now
                  </Button>
                </DialogTrigger>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${resortHero})` }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="sr-only">Royals Haven A Sanctuary Of Elegance And Comfort.</span>
              <SplitText text={"Royals Haven A Sanctuary Of Elegance And Comfort."} className="inline-block" delay={30} duration={0.4} splitType="chars" textAlign="left" />
            </h1>
            <SplitText
              text={"Nestled in the heart of Norton, we offer you a sophisticated haven where elegance and comfort unite to create an unforgettable experience."}
              className="text-xl mb-8 block"
              splitType="words"
              delay={50}
              duration={0.6}
              textAlign="left"
              autoRepeat={true}
              repeatDelay={1.5}
              repeatYoyo={false}
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Book Now
                  </Button>
                </DialogTrigger>
              </Dialog>
            
            </div>
          </div>
           
          <div className="hidden overflow-hidden scrollbar-hide lg:block absolute right-8 top-1/2 transform -translate-y-1/2 w-1/2 h-[550px]">
            <div className="flex items-center justify-center h-full">
              <Stack
                randomRotation={true}
                sensitivity={200}
                sendToBackOnClick={true}
                cardDimensions={{ width: 420, height: 480 }}
                cardsData={[
                  { id: 1, img: beautifulGardens },
                  { id: 2, img: gazebootDining },
                  { id: 3, img: comfortableRooms },
                ]}
                animationConfig={{ stiffness: 240, damping: 22 }}
              />
            </div>
           </div>
        </div>
      </section>

      <Features />

      <Tour />

      <Gallery />

      <About />

      {/* Wellness Section */}
      <Wellness />

      <Amenities />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Royals Haven</h3>
              <p className="text-sm mb-4">
                Experience the finest hospitality in Zimbabwe. Our resort offers a perfect blend of luxury, comfort, and natural beauty.
              </p>
              <p className="text-sm font-semibold">"We are unique... hospitality next to none!"</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Amenities</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Gallery</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm">
                <div>4386 Knowe, Norton, Zimbabwe</div>
                <div>+263 712 150 979</div>
                <div>royalshaven@consultant.com</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Special Offers</h4>
              <p className="text-sm mb-4">
                Ask about our current discounts and seasonal packages when you contact us.
              </p>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Call Now: +263 712 150 979
              </Button>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-sm">
            <p>&copy; 2025 Royal Havens Resort. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Booking Dialog */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Book Your Stay</DialogTitle>
          </DialogHeader>
          <form className="space-y-4 pt-4">
            <div>
              <Label htmlFor="booking-name">Full Name *</Label>
              <Input id="booking-name" placeholder="Your full name" />
            </div>
            <div>
              <Label htmlFor="booking-email">Email Address *</Label>
              <Input id="booking-email" type="email" placeholder="your@email.com" />
            </div>
            <div>
              <Label htmlFor="booking-phone">Phone Number</Label>
              <Input id="booking-phone" placeholder="+263 xxx xxx xxx" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="booking-checkin">Check-in</Label>
                <Input id="booking-checkin" type="date" />
              </div>
              <div>
                <Label htmlFor="booking-checkout">Check-out</Label>
                <Input id="booking-checkout" type="date" />
              </div>
            </div>
            <div>
              <Label htmlFor="booking-guests">Guests</Label>
              <Input id="booking-guests" type="number" defaultValue="2" />
            </div>
            <div>
              <Label htmlFor="booking-message">Special Requests</Label>
              <Textarea 
                id="booking-message" 
                placeholder="Any special requests or questions..."
                rows={3}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={(e) => {
                e.preventDefault();
                setIsBookingOpen(false);
                // Handle booking submission here
              }}
            >
              Send Booking Request
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};


export default Index;
