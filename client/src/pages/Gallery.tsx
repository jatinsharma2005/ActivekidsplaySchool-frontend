import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize,
} from "lucide-react";

type MediaItem = {
  type: "image" | "video";
  src: string;
};

const ITEMS_PER_PAGE = 15;

export default function Gallery() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [page, setPage] = useState(0);

  /* ================= FETCH ================= */
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);

        // ⚠️ PUT YOUR RENDER BACKEND URL HERE
        const res = await fetch("https://activekidsplayschool-backend.onrender.com/gallery");

        const data = await res.json();
        setMedia(data);
      } catch (err) {
        console.error("Gallery fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(media.length / ITEMS_PER_PAGE);

  const start = page * ITEMS_PER_PAGE;
  const currentItems = media.slice(start, start + ITEMS_PER_PAGE);

  const nextPage = () => page < totalPages - 1 && setPage(page + 1);
  const prevPage = () => page > 0 && setPage(page - 1);

  /* ================= LIGHTBOX ================= */
  const next = () =>
    setActiveIndex((prev) => (prev! + 1) % media.length);

  const prev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? media.length - 1 : prev! - 1
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Our School Gallery"
        subtitle="Learning happens best when it's fun!"
        color="green"
      />

      <div className="max-w-7xl mx-auto px-4 py-20">

        {/* ================= LOADING UI ================= */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">

            {/* spinner */}
            <div className="w-10 h-10 border-4 border-[hsl(var(--primary-green))] border-t-transparent rounded-full animate-spin mb-6" />

            <p className="text-muted-foreground font-medium">
              Loading memories... 📸
            </p>

            {/* skeleton cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 w-full">
              {Array(6).fill(0).map((_, i) => (
                <div
                  key={i}
                  className="h-64 bg-gray-200 rounded-2xl animate-pulse"
                />
              ))}
            </div>
          </div>
        )}

        {/* ================= GRID ================= */}
        {!loading && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {currentItems.map((item, i) => {
                const realIndex = start + i;

                return (
                  <motion.div
                    key={realIndex}
                    whileHover={{ scale: 1.03 }}
                    className="relative rounded-2xl overflow-hidden shadow-md cursor-pointer group"
                    onClick={() => setActiveIndex(realIndex)}
                  >
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        preload="metadata"
                        className="w-full h-64 object-cover"
                      />
                    ) : (
                      <img
                        src={item.src}
                        loading="lazy"
                        className="w-full h-64 object-cover"
                        alt="gallery"
                      />
                    )}

                    {/* hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                      <Maximize className="text-white w-8 h-8" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ================= PAGINATION ================= */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-6 mt-10">
                <button
                  onClick={prevPage}
                  disabled={page === 0}
                  className="px-4 py-2 bg-white shadow rounded-xl disabled:opacity-40"
                >
                  <ChevronLeft />
                </button>

                <span className="font-semibold">
                  Page {page + 1} / {totalPages}
                </span>

                <button
                  onClick={nextPage}
                  disabled={page === totalPages - 1}
                  className="px-4 py-2 bg-white shadow rounded-xl disabled:opacity-40"
                >
                  <ChevronRight />
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* ================= LIGHTBOX ================= */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          {/* close */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={32} />
          </button>

          {/* prev */}
          <button onClick={prev} className="absolute left-6 text-white">
            <ChevronLeft size={40} />
          </button>

          <div className="max-w-5xl max-h-[85vh] px-6">
            {media[activeIndex].type === "video" ? (
              <video
                src={media[activeIndex].src}
                controls
                autoPlay
                className="max-h-[85vh] rounded-xl"
              />
            ) : (
              <img
                src={media[activeIndex].src}
                className="max-h-[85vh] rounded-xl"
                alt="preview"
              />
            )}
          </div>

          {/* next */}
          <button onClick={next} className="absolute right-6 text-white">
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
}
