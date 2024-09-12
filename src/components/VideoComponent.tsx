import HeroVideoDialog from "@/@/components/magicui/hero-video";

export default function VideoComponent({
  yt,
  title,
  thumbnailSrc,
}: {
  yt: string;
  title: string;
  thumbnailSrc: string;
}) {
  return (
    <HeroVideoDialog
      animationStyle='top-in-bottom-out'
      videoSrc={yt}
      thumbnailSrc={thumbnailSrc}
      thumbnailAlt={title}
    />
  );
}
