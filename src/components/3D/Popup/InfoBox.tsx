import Link from "next/link";
import Image from "next/image";

type InfoBoxProps = {
  text: string;
  link: string;
  buttontext: string;
};

const InfoBox: React.FC<InfoBoxProps> = ({ text, link, buttontext }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link className="neo-btn neo-brutalism-white" href={link}>
        {buttontext}
        <Image
          className="w-4 h-4 object-contain"
          src="/assets/icons/arrow.svg"
          alt="arrow"
          width={20}
          height={20}
        />
      </Link>
    </div>
  );
};

export default InfoBox;
