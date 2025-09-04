
'use client';

import Link from "next/link";
import { CheckCircle, X, ChevronLeft, ChevronRight, Eye, Loader2, Image as ImageIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/begin.jpg",
  "/images/team2.jpg",
  "/images/congrats.jpg",
];

// Highlight points with icon paths
const highlightPoints = [
  { icon: "/icons/experience.png", text: "Experience" },
  { icon: "/icons/innovation.png", text: "Innovation" },
  { icon: "/icons/hand.png", text: "Strong Support" },
  { icon: "/icons/star.png", text: "Customer Trust" },
];

// Loading Spinner Component
type SpinnerSize = "sm" | "md" | "lg" | "xl";
interface LoadingSpinnerProps {
  size?: SpinnerSize;
  className?: string;
}
const LoadingSpinner = ({ size = "md", className = "" }: LoadingSpinnerProps) => {
  const sizeClasses: Record<SpinnerSize, string> = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Loader2 className={`animate-spin text-blue-600 ${sizeClasses[size]}`} />
    </div>
  );
};

// Image with Loading State Component
interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  onError?: () => void;
  onLoad?: () => void;
}
const ImageWithLoader = ({ src, alt, className, fallback, onError, onLoad }: ImageWithLoaderProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setError(true);
    setLoading(false);
    if (onError) onError();
  };

  return (
    <div className="relative w-full h-full">
      {loading && !error && (
        <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      )}
      {error ? (
        <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p className="text-sm">Failed to load</p>
          </div>
        </div>
      ) : (
        <img
          src={fallback && error ? fallback : src}
          alt={alt}
          className={`${className} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};

// Enhanced Gallery Modal Component
type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  fallback: string;
};

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GalleryModal = ({ isOpen, onClose }: GalleryModalProps) => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [imageLoadError, setImageLoadError] = useState<{ [key: number]: string }>({});
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  // Load gallery images
  useEffect(() => {
    if (isOpen) {
      const loadGalleryImages = async () => {
        setLoading(true);
        const imageList = [];

        for (let i = 1; i <= 23; i++) {
          const jpegPath = `/about/${i}.jpeg`;

          imageList.push({
            id: i,
            src: jpegPath,
            alt: `Gallery image ${i}`,
            fallback: jpegPath
          });
        }

        setGalleryImages(imageList);

        // Simulate loading time for better UX
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      };

      loadGalleryImages();
    }
  }, [isOpen]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % validImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleImageError = (imageId: number, useFallback = false) => {
    setImageLoadError(prev => ({
      ...prev,
      [imageId]: useFallback ? 'both-failed' : 'jpg-failed'
    }));
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextImage();
    if (isRightSwipe) prevImage();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Filter out images that failed to load completely
  const validImages = galleryImages.filter(img =>
    imageLoadError[img.id] !== 'both-failed'
  );

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full h-full max-w-6xl max-h-full bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black/20">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                Our Memories
              </h2>
              {/* <p className="text-sm text-white/70 mt-1">Explore our journey and achievements</p> */}
            </div>
            <motion.button
              onClick={onClose}
              className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 text-white group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-200" />
            </motion.button>
          </div>

          {loading ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-white text-center">
                <LoadingSpinner size="xl" className="mb-6" />
                <motion.p
                  className="text-lg sm:text-xl"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Loading gallery...
                </motion.p>
                <div className="mt-4 flex justify-center space-x-1">
                  {[0, 1, 2].map(i => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 0.6, delay: i * 0.2, repeat: Infinity }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : validImages.length > 0 ? (
            <>
              {/* Main Image Display */}
              <div
                className="flex-1 flex items-center justify-center p-2 sm:p-4 relative"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <motion.button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 z-10 p-2 sm:p-3 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-200 text-white backdrop-blur-sm"
                  disabled={validImages.length <= 1}
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>

                <div className="relative max-w-full max-h-full flex items-center justify-center">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <ImageWithLoader
                      src={imageLoadError[validImages[currentImageIndex]?.id] === 'jpg-failed'
                        ? validImages[currentImageIndex]?.fallback
                        : validImages[currentImageIndex]?.src}
                      alt={validImages[currentImageIndex]?.alt}
                      className="max-w-full max-h-[60vh] sm:max-h-[70vh] object-contain rounded-xl shadow-2xl"
                      onError={() => {
                        if (imageLoadError[validImages[currentImageIndex]?.id] !== 'jpg-failed') {
                          handleImageError(validImages[currentImageIndex]?.id, false);
                        } else {
                          handleImageError(validImages[currentImageIndex]?.id, true);
                        }
                      }} fallback={undefined} onLoad={undefined} />

                    {/* Image Counter */}
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
                      {currentImageIndex + 1} of {validImages.length}
                    </div>
                  </motion.div>
                </div>

                <motion.button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 z-10 p-2 sm:p-3 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-200 text-white backdrop-blur-sm"
                  disabled={validImages.length <= 1}
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </div>

              {/* Thumbnail Navigation */}
              <div className="p-2 sm:p-4 border-t border-white/10 bg-black/10">
                <div className="max-h-20 sm:max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                  <div className="flex gap-2 justify-center pb-2">
                    {validImages.slice(0, 50).map((img, index) => (
                      <motion.button
                        key={img.id}
                        onClick={() => goToImage(index)}
                        className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${index === currentImageIndex
                          ? 'border-blue-400 ring-2 ring-blue-400/50 scale-110'
                          : 'border-white/20 hover:border-white/40'
                          }`}
                        whileHover={{ scale: index === currentImageIndex ? 1.1 : 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ImageWithLoader
                          src={imageLoadError[img.id] === 'jpg-failed' ? img.fallback : img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover"
                          onError={() => {
                            if (imageLoadError[img.id] !== 'jpg-failed') {
                              handleImageError(img.id, false);
                            } else {
                              handleImageError(img.id, true);
                            }
                          }} fallback={undefined} onLoad={undefined} />
                        {index === currentImageIndex && (
                          <div className="absolute inset-0 bg-blue-500/20 border-2 border-blue-400 rounded-lg"></div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Swipe indicator for mobile */}
                <div className="mt-2 text-center sm:hidden">
                  <p className="text-xs text-white/60">Swipe left or right to navigate</p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-white text-center p-8">
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Eye className="w-10 h-10 opacity-60" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">No Images Found</h3>
                <p className="text-white/70 max-w-sm mx-auto">
                  We couldn't find any images in the gallery at this time. Please check back later.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function About() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = carouselRef.current;
    if (container) {
      const scrollWidth = container.scrollWidth / images.length;
      container.scrollTo({
        left: scrollWidth * index,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <main className="h-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pb-20">
      {/* Hero Section */}
      <div className="relative pt-20 px-4 text-center bg-[#09356C] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-base md:text-lg text-blue-100 max-w-xl mx-auto leading-relaxed">
            Welcome to Compact Softwares & Services (CSS) – your trusted partner in IT sales and services since 1996.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center pt-14 px-6 lg:px-20">
        {/* Image Carousel with View More Button */}
        <div className="space-y-4">
          <div className="relative w-full h-72 sm:h-96 md:h-[30rem] lg:h-[34rem] overflow-hidden rounded-2xl shadow-2xl">
            <div
              ref={carouselRef}
              className="flex w-full h-full transition-all duration-700 ease-in-out overflow-x-scroll scroll-smooth scrollbar-hide"
            >
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`About us ${i}`}
                  className="w-full flex-shrink-0 object-fit object-center h-full rounded-2xl"
                  style={{ minWidth: "100%" }}
                />
              ))}
            </div>
            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full transition-all ${i === index ? "bg-blue-600 w-4" : "bg-gray-300"}`}
                ></span>
              ))}
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center">
            <motion.button
              onClick={() => setIsGalleryOpen(true)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-5 h-5" />
              View More Images
            </motion.button>
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <span className="text-[#00AA3E] text-sm font-bold uppercase tracking-wide">
            About Compact Softwares & Services (CSS)
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Welcome to Compact Softwares & Services
          </h2>

          <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            It is our privilege to introduce <strong>Compact Softwares & Services (CSS)</strong>,
            a company engaged in providing IT sales and services for over <strong>29+ years</strong>.
            Today we proudly serve more than <strong>25,000+ satisfied customers</strong> across diverse industries.
          </p>
          <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            Backed by a strong network of <strong>50+ dedicated IT Channel Associates</strong> and
            <strong>100+ accounting professionals</strong>, CSS has been an <strong>Authorized Channel Partner of BUSY Infotech Pvt. Ltd.</strong>
            since <strong>1996</strong>. We have consistently ranked <strong>No.1 in sales performance</strong> since our inception.
          </p>
          <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            With <strong>65% of our enquiries coming from existing customers</strong>,
            we are proud of our strong after-sales support. From small shopkeepers to large industries,
            CSS is committed to delivering affordable, innovative, and scalable technology solutions tailored to your business.
          </p>

          {/* Animated Highlighted Points */}
          <div className="mt-6 flex flex-col md:flex-row md:flex-wrap gap-6">
            {highlightPoints.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                whileHover={{
                  scale: 1.2,
                  color: "#b91c1c",
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                <img src={item.icon} alt={item.text} className="w-6 h-6" />
                <span className="font-semibold text-[#b91c1c]">{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Us */}
          <h3 className="mt-10 text-xl sm:text-2xl font-bold text-blue-700 relative inline-block">
            Why Choose Compact Software & Services?
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"></span>
          </h3>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 text-gray-800 text-sm sm:text-base">
            {[
              "29+ Years of Experience in IT & Software Solutions",
              "Authorized & Trusted Partner for BUSY Software",
              "25,000+ Clients across industries",
              "Strong Network of 50+ IT Associates",
              "100+ Certified Accounting Professionals",
              "65% Enquiries from Client Referrals",
              "Exclusive Add-ons: Collection Engine, KYC, DMS, Ordering App, Bow BI",
              "Trusted by businesses from small retailers to large industries",
              "One-Stop Partner for ERP, CRM, BI tools, Cloud & Integrations",
              "Affordable & Scalable Solutions with Dedicated Support",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link
              href="#contacts"
              className="inline-block bg-[#00AA3E] text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#009237] transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </main>
  );
}