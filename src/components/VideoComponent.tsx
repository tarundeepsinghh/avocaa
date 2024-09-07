import HeroVideoDialog from "@/@/components/magicui/hero-video";

export default function VideoComponent({
  yt,
  title,
}: {
  yt: string;
  title: string;
}) {
  return (
    <div className='relative'>
      <HeroVideoDialog
        animationStyle='top-in-bottom-out'
        videoSrc={yt}
        thumbnailSrc={yt}
        thumbnailAlt={title}
      />
    </div>
  );
}
