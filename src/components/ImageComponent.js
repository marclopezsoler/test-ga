import Image from "next/image";
import styles from "@/styles/components/ImageComponent.module.scss";
import { useEffect, useState } from "react";
import closeIcon from "../../public/assets/icons/close.svg";
import { isMobile } from "react-device-detect";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

export default function ImageComponent({ workId, image_alt, numberImg, img4Type }) {
  const [hideImg, setHideImg] = useState(true);
  const [noSrc, setNoSrc] = useState(true);
  const [showFullImage, setShowFullImage] = useState(false);

  const jpgImagePath = `/assets/images/work/${workId}/image${numberImg}.jpg`;
  const jpgImage4Path = `/assets/images/work/${workId}/image${numberImg}.${img4Type}`;

  let imageSrc = jpgImagePath;

  if(numberImg == 4){
    imageSrc = jpgImage4Path;
  } else{
    imageSrc = jpgImagePath;
  }

  useEffect(() => {
    if (imageSrc) {
      setHideImg(false);
    } else {
      alert("Image does not exist");
    }

    if (image_alt === "" || !image_alt) {
      setNoSrc(true);
    } else {
      setNoSrc(false);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [imageSrc]);

  const toggleFullImage = () => {
    setShowFullImage(!showFullImage);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setShowFullImage(false);
    }
  };

  return (
    <div className={`${styles.image_parent} ${noSrc ? styles.hide : ""} ${syne.className}`}>
      <div
        className={`${styles.full_width} ${showFullImage ? styles.show : ""}`}
      >
        {showFullImage && (
          <>
            <div className={styles.cross} onClick={toggleFullImage}>
              <Image src={closeIcon} alt="Close" width={30} height={30} title="close icon"/>
            </div>
            <Image
              id="fullImage"
              src={imageSrc}
              width={800}
              height={800}
              className={styles.full_image}
              alt={image_alt}
              loading="lazy"
              title={image_alt}
            />
          </>
        )}
      </div>
      <Image
        id="image"
        src={imageSrc}
        width={1000}
        height={1000}
        className={`${styles.image} ${hideImg ? styles.hide_img : ""} ${
          isMobile ? "" : styles.image_hover
        }`}
        alt={image_alt}
        onClick={toggleFullImage}
        loading="lazy"
        title={image_alt}
      />
    </div>
  );
}