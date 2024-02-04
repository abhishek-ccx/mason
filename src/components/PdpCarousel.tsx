import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function PdpCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className=""
    >
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/5">
            <div className="p-1">
              <Card className="rounded-none">
                <CardContent className="flex aspect-square items-center justify-center p-2 gap-x-4">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="pl-0" />
      <CarouselNext />
    </Carousel>
  );
}
