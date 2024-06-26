"use client";

import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center max-w-xl min-h-screen gap-8 mx-auto transition-all">
      <div className="flex flex-col items-center justify-center gap-4">
        <FileSearch size={42} className="text-color-accent md:size-20" />
        <h3 className="text-2xl font-bold text-color-accent md:text-3xl">NOT FOUND</h3>
      </div>
      <div>
        <button
          onClick={() => router.back()}
          className="text-lg transition-all md:text-xl text-color-primary hover:text-color-accent ">
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default NotFound;
