"use client";

import { PlusCircle } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import Notification from "@/components/Toast";
import { useRouter } from "next/navigation";

const CollectionButton = ({ anime_mal_id, user_email, anime_title, anime_image }) => {
  const [isSaved, setIsSaved] = useState(false);

  const router = useRouter();

  const handleCollection = async (e) => {
    e.preventDefault();
    const data = { anime_mal_id, user_email, anime_title, anime_image };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data)
    });

    //* client side
    if (response.status == 200) {
      setIsSaved(true);
      setTimeout(() => {
        router.refresh();
      }, 4000);
    }

    //! for server side
    if (response.ok) {
      console.log(response.statusText);
    } else {
      console.error(response);
    }
  };
  return (
    <>
      {isSaved && <Notification message={"Add To Favorite"} />}
      <div>
        <button
          onClick={handleCollection}
          className="flex flex-wrap items-center justify-center gap-2 p-2 m-3 transition-all rounded-md hover:text-color-primary bg-color-accent hover:bg-color-alter">
          <span className="font-bold">
            <PlusCircle size={20} />
          </span>
          Save
        </button>
      </div>
    </>
  );
};

export default CollectionButton;
