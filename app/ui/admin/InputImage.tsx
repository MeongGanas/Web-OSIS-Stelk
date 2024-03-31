"use client";
import Image from "next/image";
import { useState } from "react";

export default function InputImage({ name }: { name: string }) {
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>(
    null,
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };
  return (
    <>
      <div className="w-full rounded-md border border-gray-500 p-3 text-sm text-default-500">
        <input
          type="file"
          className="block w-full"
          id={name}
          name={name}
          onChange={handleImageChange}
        />
      </div>
      {previewUrl && (
        <div className="mt-4">
          <Image
            src={`${previewUrl}`}
            alt="Image Preview"
            width={200}
            height={200}
          />
        </div>
      )}
    </>
  );
}
