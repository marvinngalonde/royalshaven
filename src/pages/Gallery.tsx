import { Button } from "@/components/ui/button";
import Masonry from "@/components/Masonry";

 // gallery images as strict string[] (public images + a couple of site images)
  const galleryImages: string[] = [
    '/images/manicured-gardens.jpg',
    '/images/gazebo-interior.jpg',
    '/images/main-building.jpg',
    '/images/resort-exterior.jpg',
    '/images/garden-evening.jpg',
    '/images/garden-paths.jpg',
    '/images/garden-sunlight.jpg',
    '/images/garden-view.jpg',
    '/images/landscape-view.jpg',
    '/images/traditional-building.jpg'
  ];
  
  const masonryItems = galleryImages.map((src, idx) => {
    // choose a range of heights to produce a masonry effect
    const heights = [420, 360, 480, 340, 400, 320, 460, 300, 440, 360];
    return {
      id: `g-${idx}`,
      img: src,
      url: src,
      height: heights[idx % heights.length],
    };
  });

const Gallery = () => {
  return (
    <>
    {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experience the Beauty</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse of what awaits you at Royal Havens - from our stunning architecture to our peaceful gardens
            </p>
          </div>
          
          <div className="min-h-[450px]">
            <Masonry
              items={masonryItems}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.98}
              blurToFocus={true}
              duration={0.7}
              stagger={0.03}
            />
          </div>
          
         
        </div>
      </section>
    </>
  );
};  

export default Gallery;