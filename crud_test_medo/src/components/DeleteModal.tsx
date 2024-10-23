import React from "react";
import background from "../assets/images/broken.jpg";
import Button from "./Button";

interface DeleteModalProps {
  isVisible: boolean;
  onConfirm: () => void;
  onCancel: () => void; 
}

export default function DeleteModal({ isVisible, onCancel, onConfirm }: DeleteModalProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-darker w-[500px] h-[300px] rounded-lg shadow-lg">
        <div
          className="absolute w-full h-full bg-cover opacity-90 mix-blend-soft-light"
          style={{
            backgroundImage: `url(${background})`,
          }}
        ></div>
        <div className="relative z-10 w-full text-lighter pt-8 text-2xl px-8 pb-24">
          <p>Are you sure you want to destroy this vinyl?</p>
        </div>
        <div className="relative z-10 flex flex-row right-4 left-4 justify-between px-8">
          <Button onClick={onCancel}>No</Button>
          <Button onClick={onConfirm} variant="inverted">Yes</Button>
        </div>
      </div>
    </div>
  );
}
