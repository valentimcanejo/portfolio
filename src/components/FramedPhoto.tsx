import Image from "next/image";
import profilePhoto from "@/assets/profile.jpg";

export function FramedPhoto() {
  return (
    <div className="relative h-28 w-[5.4rem] shrink-0 overflow-hidden rounded-sm border-2 border-border sm:h-32 sm:w-24">
      <span className="absolute left-0 top-0 z-10 h-2 w-2 border-l-2 border-t-2 border-layer-interface" />
      <Image
        src={profilePhoto}
        alt="Rômulo Valentim"
        fill
        sizes="128px"
        placeholder="blur"
        className="object-cover transition-transform duration-500 hover:scale-110"
        priority
      />
    </div>
  );
}
