import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TreePine, Users, Utensils, Car, Shield } from "lucide-react";

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Amenities & Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <TreePine className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Beautifully Designed Gardens</h3>
              <p className="text-sm text-muted-foreground">Immerse yourself in our lush, meticulously maintained tropical gardens</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Spacious Comfortable Rooms</h3>
              <p className="text-sm text-muted-foreground">Relax in our well-appointed accommodations with modern amenities</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Utensils className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Outdoor Gazebo & Bar</h3>
              <p className="text-sm text-muted-foreground">Enjoy dining and drinks in our traditional thatched gazebo</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Car className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Secure Car Park</h3>
              <p className="text-sm text-muted-foreground">Peace of mind with our safe and secure parking facilities</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Children's Play Area</h3>
              <p className="text-sm text-muted-foreground">Fun and safe play spaces for our youngest guests</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Clean Room Service</h3>
              <p className="text-sm text-muted-foreground">Impeccable housekeeping and room service standards</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
