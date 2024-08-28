import { FC, PropsWithChildren, useEffect, useRef } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface TCarouselAutoplay extends PropsWithChildren {
  options?: EmblaOptionsType;
}

export const CarouselAutoplay: FC<TCarouselAutoplay> = ({
  options,
  children,
}) => {
  const autoplayRef = useRef(Autoplay({ playOnInit: true, delay: 3000 }));
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplayRef.current]);

  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!emblaApi) return;

    const onDragStart = () => {
      if (viewportRef.current) {
        viewportRef.current.style.cursor = "grabbing";
      }
      autoplayRef.current.stop();
    };

    const onDragEnd = () => {
      if (viewportRef.current) {
        viewportRef.current.style.cursor = "grab";
      }
      autoplayRef.current.play();
    };

    emblaApi.on("pointerDown", onDragStart);
    emblaApi.on("pointerUp", onDragEnd);

    if (viewportRef.current) {
      viewportRef.current.style.cursor = "grab";
    }

    return () => {
      emblaApi.off("pointerDown", onDragStart);
      emblaApi.off("pointerUp", onDragEnd);
    };
  }, [emblaApi]);

  return (
    <div className="embla">
      <div
        className="embla__viewport"
        ref={(e) => {
          emblaRef(e);
          viewportRef.current = e;
        }}
      >
        <div className="embla__container">{children}</div>
      </div>
    </div>
  );
};
