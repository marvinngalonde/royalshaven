import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Star, Wifi, Car, Users, TreePine, Utensils, Shield, Play, RotateCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <>
       <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-accent" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="opacity-80">4386 Knowe, Norton, Zimbabwe</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-accent" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="opacity-80">+263 712 150 979</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-accent" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="opacity-80">royalshaven@consultant.com</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-4">What Makes Us Unique</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <span>24/7 Security - Round-the-clock security ensures your safety</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TreePine className="w-5 h-5 text-accent" />
                    <span>Natural Beauty - Surrounded by pristine gardens</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-accent" />
                    <span>Personal Touch - Personalized service for every guest</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Book Your Stay</h3>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Your full name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+263 xxx xxx xxx" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="checkin">Check-in Date</Label>
                      <Input id="checkin" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="checkout">Check-out Date</Label>
                      <Input id="checkout" type="date" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Input id="guests" type="number" defaultValue="2" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message or Special Requests</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your stay preferences, special occasions, or any questions you have..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}