const resortHero = '/images/resort-exterior.jpg';
const comfortableRooms = '/images/main-building.jpg';
const gazebootDining = '/images/gazebo-interior.jpg';
const beautifulGardens = '/images/manicured-gardens.jpg';
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <>
         {/* About Section */}
              <section id="about" className="py-20 bg-muted/20">
                <div className="container mx-auto px-4">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-4xl font-bold mb-6">Royals Haven Resort The Epitome Of Refined Comfort Living</h2>
                      <p className="text-muted-foreground mb-6">
                        Providing a sanctuary built on enrichment of luxury, soul relaxation and beauty. Immerse yourself and your loved ones in unparalleled comfort and experience.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span>Beautifully designed gardens</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span>Spacious comfortable rooms</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span>Traditional African hospitality</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img src={beautifulGardens} alt="Resort view" className="w-full h-96 object-cover rounded-lg" />
                    </div>
                  </div>
                </div>
              </section>
        
              {/* Top Reasons to Stay Section */}
              <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                      <h2 className="text-4xl font-bold mb-6">Top Reasons <span className="text-primary">to Stay</span></h2>
                      <p className="text-muted-foreground mb-8">
                        We provide the best quality service for you. You can enjoy all kinds of pleasures in one place. If you want, we are always ready to serve our clients. We provide the best quality service for you, so you can enjoy all your pleasures.
                      </p>
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 mb-12">
                        COME
                      </Button>
                      <div className="grid grid-cols-2 gap-y-8 gap-x-4 text-center">
                        <div>
                          <div className="text-4xl font-bold text-primary">10+</div>
                          <div className="text-muted-foreground mt-1">Restaurant</div>
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-primary">05+</div>
                          <div className="text-muted-foreground mt-1">Gym</div>
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-primary">03+</div>
                          <div className="text-muted-foreground mt-1">Beach</div>
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-primary">115</div>
                          <div className="text-muted-foreground mt-1">Rooms</div>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-[500px] hidden lg:block">
                      <div className="absolute top-0 left-1/4 w-3/4 h-full bg-primary/5 rounded-3xl"></div>
                      <img 
                        src={comfortableRooms} 
                        alt="Comfortable hotel room" 
                        className="absolute top-1/2 -translate-y-1/2 left-0 w-5/6 h-auto object-cover rounded-2xl shadow-2xl" 
                      />
                    </div>
                  </div>
                </div>
              </section>
        
        
              {/* Places Section */}
              <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                  <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                      <h2 className="text-4xl font-bold mb-6">Unique Places And Join Entertainment</h2>
                      <div className="space-y-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold">Villa Cimbrone Thy</h3>
                            <p className="text-muted-foreground">Italy's Heart</p>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">03</div>
                            <div className="text-sm text-muted-foreground">Services</div>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Starting $5,150 per night
                        </div>
                        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                          View Details
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <img src={comfortableRooms} alt="Villa view 1" className="w-full h-48 object-cover rounded" />
                      <img src={gazebootDining} alt="Villa view 2" className="w-full h-48 object-cover rounded" />
                      <img src={beautifulGardens} alt="Villa view 3" className="w-full h-64 object-cover rounded col-span-2" />
                    </div>
                  </div>
                </div>
              </section>
    </>
  );
}