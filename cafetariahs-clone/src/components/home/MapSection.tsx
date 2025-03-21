import Image from 'next/image';

const MapSection = () => {
  return (
    <div className="w-full">
      <Image
        src="https://ext.same-assets.com/4081413330/2410328882.png"
        alt="Google Maps location of Cafetaria Hollands Spoor"
        width={1200}
        height={400}
        className="w-full h-auto"
      />
    </div>
  );
};

export default MapSection;
