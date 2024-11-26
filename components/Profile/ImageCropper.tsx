import React, { useRef, useState } from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";

interface ImageCropperProps {
  onImageCropped: (blob: Blob | null) => void;
  loading: boolean;
}

export const ImageCropper: React.FC<ImageCropperProps> = ({
  onImageCropped,
  loading,
}) => {
  const imageElement = useRef<HTMLImageElement>(null);
  const [selectedImage, setSelectedImage] = useState<boolean>(false);
  const [cropper, setCropper] = useState<Cropper | null>(null);

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(true);
      const reader = new FileReader();
      reader.onload = (event) => {
        if (imageElement.current) {
          imageElement.current.src = event.target?.result as string;
          setCropper(
            new Cropper(imageElement.current, {
              aspectRatio: 1,
            })
          );
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const getCroppedImage = () => {
    if (cropper) {
      const canvas = cropper.getCroppedCanvas({
        width: 270,
        height: 270,
        minWidth: 256,
        minHeight: 256,
        maxWidth: 4096,
        maxHeight: 4096,
        fillColor: "#fff",
        imageSmoothingEnabled: true,
        imageSmoothingQuality: "high",
      });

      canvas.toBlob((blob) => {
        onImageCropped(blob);
      }, "image/webp");
    }
  };

  return (
    <div className="md:w-[500px] w-[300px]">
      <div className="border-dashed border-2 rounded-[8px] text-center w-full h-[300px]">
        {selectedImage ? (
          <img
            ref={imageElement}
            alt="Image to crop"
            style={{ maxWidth: "100%" }}
          />
        ) : (
          <>
            <input
              type="file"
              onChange={onFileChange}
              id="editImage"
              className="hidden"
            />
            <label
              htmlFor="editImage"
              className="leading-[300px] text-[#082A5E] inline-block font-body text-[34px] cursor-pointer"
            >
              Choose a file
            </label>
          </>
        )}
      </div>
      {selectedImage && (
        <div className="flex mt-[15px]">
          <button
            className="py-[12px] px-[21px] text-white font-medium bg-[#1363DF] capitalize inline-block tracking-[0.5px] leading-[1] text-center rounded-[4px] font-body hover:text-white hover:bg-[#082A5E] transition-all duration-300 ease-out"
            onClick={getCroppedImage}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <span className="mr-2">Loading...</span>
                <div className="animate-spin rounded-full h-4 w-4 border-t border-b border-white"></div>
              </div>
            ) : (
              "Save"
            )}
          </button>
        </div>
      )}
    </div>
  );
};
