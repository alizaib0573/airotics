export type WorkDetail =
  | {
      heading: string;
      description: string;
      imgSrc: string;
      isPlayActive: true;
      videoSrc: string;
    }
  | {
      heading: string;
      description: string;
      imgSrc: string;
      isPlayActive: false;
    };

export type Work = {
  heading: string;
  subheading: string;
  description: string;
  imgSrc: string;
  gradient: { to: string; from: string };
  marqueeColor: string;
  details: WorkDetail[];
};

export const works: Work[] = [
  {
    heading: "Website",
    subheading: "The End of 'Good Enough'",
    description:
      "Why just build a website when you can engineer a digital domain? We craft high-impact frontends that annihilate the competition and convert users with uncompromising design and speed.",
    imgSrc: "/home/work/tech-main-1.jpg",
    marqueeColor: "#ffffff",
    gradient: { to: "#7427ff", from: "#002aff" },
    details: [
      {
        heading: "Sprite",
        description:
          "",
        imgSrc: "/home/work/sprite-1.png",
        isPlayActive: true,
        videoSrc: "/work/video/sprite.mp4",
      },
      {
        heading: "Addidas",
        description:
          "",
        imgSrc: "/home/work/adidas.png",
        isPlayActive: true,
        videoSrc: "/work/video/addidas.mp4",
      },
      {
        heading: "Lotte Castle",
        description:
          "",
        imgSrc: "/home/work/lottie-castle.png",
        isPlayActive: true,
        videoSrc: "/work/video/lotte.mp4",
      },
      {
        heading: "Cloud Castles",
        description:
          "",
        imgSrc: "/home/work/cloud-castles.png",
        isPlayActive: true,
        videoSrc: "/work/video/cloudcastle.mp4",
      },
    ],
  },
  {
    heading: "AI & Blockchain",
    subheading: "Creating the Future Domain",
    description:
      "We master the future stack. Blending AI's intelligence with Blockchain's integrity, we deliver the next generation of verifiable, self-optimizing platforms.",
    imgSrc: "/home/work/new-normal-main-1.jpg",
    marqueeColor: "#000000",
    gradient: { to: "#d6fe51", from: "#68d840" },
    details: [
      {
        heading: "Dron Link",
        description: "",
        imgSrc: "/home/work/new-normal-detail-1-1.jpg",
        isPlayActive: true,
        videoSrc: "/work/video/dron.mp4",
      },
      {
        heading: "Meta NFT",
        description:
          "",
        imgSrc: "/home/work/new-normal-detail-1-2.jpg",
        isPlayActive: true,
        videoSrc: "/work/video/meta.mp4",
      },
      {
        heading: "Youtube automization (hidden)",
        description: "",
        imgSrc: "/home/work/new-normal-detail-1-3.jpg",
        isPlayActive: false,
      },
      {
        heading: "Exchange market",
        description: "",
        imgSrc: "/home/work/new-normal-detail-1-4.jpg",
        isPlayActive: true,
        videoSrc: "/work/video/exchange.mp4",
      },
    ],
  },
];
