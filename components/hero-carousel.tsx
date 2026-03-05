'use client';

import { useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const HERO_SLIDES = [
  {
    id: 1,
    image: '/images/IMG_1972.JPG.jpeg',
    alt: 'Hero slide 1 - streetwear fashion',
  },
  {
    id: 2,
    image: '/images/IMG_1974.JPG.jpeg',
    alt: 'Hero slide 2 - streetwear fashion',
  },
  {
    id: 3,
    image: '/images/IMG_1976.JPG.jpeg',
    alt: 'Hero slide 3 - streetwear fashion',
  },
];

export function HeroCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent className="m-0">
        {HERO_SLIDES.map((slide) => (
          <CarouselItem key={slide.id} className="p-0 basis-full">
            <div className="w-full h-[500px] md:h-[700px] lg:h-[100vh] bg-gray-200 overflow-hidden relative">
              <Image
                src={slide.image}
                alt={slide.alt}
                className="w-full h-[700px] object-cover"
                fill
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
