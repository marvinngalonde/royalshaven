import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const comfortableRooms = '/images/main-building.jpg';
const gazebootDining = '/images/gazebo-interior.jpg';
const beautifulGardens = '/images/manicured-gardens.jpg';

export default function Features() {
  return (
    <section className="py-20 bg-background" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Indulge In Five-Star Facility & Sophistication</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our amenities have been thoughtfully designed to provide our guests with unparalleled comfort and convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <img src={comfortableRooms} alt="Modern comfort" className="w-full h-48 object-cover rounded mb-6" />
              <h3 className="text-2xl font-bold mb-4">Modern Comfort</h3>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Visit Today
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <img src={gazebootDining} alt="Classic dining" className="w-full h-48 object-cover rounded mb-6" />
              <h3 className="text-2xl font-bold mb-4">Classic Dining</h3>
              <Button variant="outline">
                Visit Today
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-cream">
            <CardContent className="p-8">
              <img src={beautifulGardens} alt="Interior beauty" className="w-full h-48 object-cover rounded mb-6" />
              <h3 className="text-2xl font-bold mb-4">Interior Beauty</h3>
              <Button variant="outline">
                Visit Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
