import { Button } from "@/components/ui/button";
import { Star,Users } from "lucide-react";
const comfortableRooms = '/images/main-building.jpg';
const gazebootDining = '/images/gazebo-interior.jpg';
const beautifulGardens = '/images/manicured-gardens.jpg';

export default function Wellness() {
    return (
        <>
            <section className="py-20 bg-cream">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-4">Exclusive Wellness & Spa Facilities</h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Indulge in our exceptional spa, where you can rejuvenate your body and soul through a variety of treatments,
                        massages, and wellness experiences that will leave you feeling refreshed and renewed.
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8 mb-12">
                        <img src={beautifulGardens} alt="Spa treatment" className="w-full h-64 object-cover rounded-lg" />
                        <div className="grid grid-cols-2 gap-4">
                            <img src={comfortableRooms} alt="Spa room 1" className="w-full h-32 object-cover rounded" />
                            <img src={gazebootDining} alt="Spa room 2" className="w-full h-32 object-cover rounded" />
                            <img src={beautifulGardens} alt="Spa room 3" className="w-full h-32 object-cover rounded col-span-2" />
                        </div>
                    </div>

                    <div className="text-center">
                        <Button className="bg-accent text-accent-foreground hover:bg-accent/90 mr-4">
                            Spa Treatments
                        </Button>
                        <div className="inline-flex items-center gap-2 text-sm">
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <span>Accredited Advisory</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gym Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Your Private Haven Royals Haven Luxury Gym</h2>
                            <p className="mb-8 opacity-90">
                                Our state-of-the-art gym offers you the perfect environment to maintain your fitness routine while enjoying your stay.
                                Modern equipment and a serene atmosphere await you.
                            </p>
                            <div className="flex gap-4">
                                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                                    Explore Gym
                                </Button>
                                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                                    Accredited Advisory
                                </Button>
                            </div>
                            <div className="mt-8 flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-semibold">Personal Training</div>
                                    <div className="text-sm opacity-80">Available upon request</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={comfortableRooms} alt="Luxury gym" className="w-full h-96 object-cover rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}