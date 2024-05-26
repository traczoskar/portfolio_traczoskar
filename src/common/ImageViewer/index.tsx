import { useEffect, useRef, useState } from "react";
import {
  CloseButton,
  Image,
  ImageContainer,
  ScreenshotDescription,
  UserInstruction,
  ViewerContainer,
  ImageInfo,
  InstructionContainer,
} from "./styled";
import ArrowButton from "./ArrowButton";
import Keyboard from "../../views/HomePage/Portfolio/ProjectDetails/KeyboardInstruct/Keyboard";
import { Screenshot } from "../../types/types";

interface ImageViewerProps {
  images?: Screenshot[];
  image?: Screenshot;
  currentIndex?: number;
  onNavigate?: (newIndex: number) => void;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  image,
  currentIndex = 0,
  onClose,
  onNavigate,
}) => {
  const [scale, setScale] = useState<number>(0.8);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const delta = event.deltaY > 0 ? -0.1 : 0.1;
      const newScale = Math.max(0.5, Math.min(2, scale + delta));
      setScale(newScale);
    };

    const handleClick = (event: MouseEvent) => {
      if (
        event.target === containerRef.current ||
        (event.target as HTMLElement).closest("img")
      ) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (images) {
        if (event.key === "ArrowLeft") {
          onNavigate!((currentIndex - 1 + images.length) % images.length);
        } else if (event.key === "ArrowRight") {
          onNavigate!((currentIndex + 1) % images.length);
        }
      }
      if (event.key === "ArrowUp") {
        setScale((prevScale) => Math.min(prevScale + 0.1, 2));
      } else if (event.key === "ArrowDown") {
        setScale((prevScale) => Math.max(prevScale - 0.1, 0.5));
      } else if (event.key === "Escape") {
        onClose();
      }
    };

    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener("wheel", handleWheel);
      containerElement.addEventListener("click", handleClick);
      window.addEventListener("keydown", handleKeyDown);
      containerElement.focus();
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener("wheel", handleWheel);
        containerElement.removeEventListener("click", handleClick);
        window.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [onClose, scale, currentIndex, images, onNavigate]);

  const currentImage = images ? images[currentIndex] : image;

  return (
    <ViewerContainer ref={containerRef} tabIndex={-1}>
      <InstructionContainer>
        <UserInstruction>
          Use <strong>Mouse Wheel</strong> to 🔍 zoom +/-
          <br />
          Use <strong>Arrow Up</strong> and <strong>Arrow Down</strong> to zoom
          +/- <br />
          {images && (
            <>
              Use <strong>Arrow Left</strong> and <strong>Arrow Right</strong>{" "}
              to change the screenshot. <br />
            </>
          )}
          Press <strong>Escape</strong> to close the picture viewer.
        </UserInstruction>
        <Keyboard />
      </InstructionContainer>
      <ScreenshotDescription>{currentImage?.alt}</ScreenshotDescription>
      <ImageContainer>
        {images && (
          <ArrowButton
            direction="left"
            onClick={() =>
              onNavigate!((currentIndex - 1 + images.length) % images.length)
            }
          />
        )}
        <Image
          src={currentImage?.imageUrl}
          alt={currentImage?.alt}
          style={{ transform: `scale(${scale})` }}
        />
        {images && (
          <ArrowButton
            direction="right"
            onClick={() => onNavigate!((currentIndex + 1) % images.length)}
          />
        )}
        <CloseButton onClick={onClose}>x</CloseButton>
      </ImageContainer>
      {images && (
        <ImageInfo>
          {currentIndex + 1}/{images.length}
        </ImageInfo>
      )}
    </ViewerContainer>
  );
};

export default ImageViewer;