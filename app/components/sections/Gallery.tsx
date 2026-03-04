import { SectionHeader } from "../ui/SectionHeader";
import { GalleryImages } from "@/app/data/constants";
import Image from "next/image";

export default function Gallery() {
    return (
        <section
            id="gallery"
            className="py-24 bg-white dark:bg-[#1C1C1C] relative border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title="GALLERY" subtitle="Moments Captured" />
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {
                        GalleryImages.map((src, idx) => (
                            <div key={idx} className="relative w-full rounded-lg overflow-hidden">
                                {/* Using regular img tag for better layout in masonry */}
                                <img
                                    src={src}
                                    loading="lazy"
                                    alt={`Gallery Image ${idx + 1}`}
                                    className="transition-transform duration-300 hover:scale-105" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}