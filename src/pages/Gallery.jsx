import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEOHead from "../components/SEOHead";
import gallery from "../data/gallery/gallery.js";

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [filter, setFilter] = useState("all");

  // Group items by collection
  const collections = gallery.reduce((acc, item) => {
    if (!acc[item.collection]) {
      acc[item.collection] = [];
    }
    acc[item.collection].push(item);
    return acc;
  }, {});

  // Get collection names
  const collectionNames = Object.keys(collections);

  // Get filtered items based on selected collection and media type
  const getFilteredItems = () => {
    let items = selectedCollection ? collections[selectedCollection] : gallery;

    if (filter !== "all") {
      items = items.filter((item) => item.type === filter);
    }

    return items;
  };

  const filteredItems = getFilteredItems();

  const handlePrevious = () => {
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedItem.id,
    );
    const prevIndex =
      (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedItem.id,
    );
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "Escape") setSelectedItem(null);
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
  };

  const handleBackToCollections = () => {
    setSelectedCollection(null);
    setSelectedItem(null);
  };

  return (
    <>
      <SEOHead title="Gallery" description="At A Glance" path="/gallery" />
      <div className="min-h-screen bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-display font-bold text-white mb-6"
            >
              Our <span className="text-teal-400">Gallery</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto font-body"
            >
              Capturing moments of innovation, collaboration, and growth at
              Future Founders Academy
            </motion.p>
          </div>

          {/* Back Button (when collection is selected) */}
          {selectedCollection && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <button
                onClick={handleBackToCollections}
                className="flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors group"
              >
                <svg
                  className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>Back to Collections</span>
              </button>
            </motion.div>
          )}

          {/* Collection View */}
          {!selectedCollection ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {collectionNames.map((collectionName, index) => {
                const collectionItems = collections[collectionName];
                const coverImage =
                  collectionItems.find((item) => item.type === "image")?.src ||
                  collectionItems[0]?.poster;
                const imageCount = collectionItems.filter(
                  (item) => item.type === "image",
                ).length;
                const videoCount = collectionItems.filter(
                  (item) => item.type === "video",
                ).length;

                return (
                  <motion.div
                    key={collectionName}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setSelectedCollection(collectionName)}
                    className="group cursor-pointer"
                  >
                    <div className="relative rounded-2xl overflow-hidden bg-navy-800 border border-white/10 hover:border-teal-500/40 transition-all duration-500 group-hover:transform group-hover:scale-105">
                      {/* Collection Cover Image */}
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img
                          src={coverImage}
                          alt={collectionName}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent" />

                        {/* Media Count Badges */}
                        <div className="absolute top-4 right-4 flex gap-2">
                          {imageCount > 0 && (
                            <div className="px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-body flex items-center gap-1">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span>{imageCount}</span>
                            </div>
                          )}
                          {videoCount > 0 && (
                            <div className="px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-body flex items-center gap-1">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                              </svg>
                              <span>{videoCount}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Collection Info */}
                      <div className="p-6">
                        <h3 className="text-2xl font-display font-bold text-white mb-2 capitalize">
                          {collectionName}
                        </h3>
                        <p className="text-slate-400 font-body mb-4">
                          {collectionItems.length}{" "}
                          {collectionItems.length === 1 ? "item" : "items"} in
                          this collection
                        </p>
                        <div className="flex items-center text-teal-400 group-hover:text-teal-300 transition-colors">
                          <span className="text-sm font-medium">
                            View Collection
                          </span>
                          <svg
                            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <>
              {/* Collection Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 capitalize">
                  {selectedCollection}
                </h2>
                <p className="text-slate-300 text-lg font-body">
                  {filteredItems.length}{" "}
                  {filteredItems.length === 1 ? "item" : "items"} in this
                  collection
                </p>
              </motion.div>

              {/* Filter Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex justify-center gap-4 mb-12"
              >
                <button
                  onClick={() => setFilter("all")}
                  className={`px-6 py-2 rounded-lg font-body font-medium transition-all duration-300 ${
                    filter === "all"
                      ? "bg-teal-500 text-white shadow-lg shadow-teal-500/30"
                      : "bg-navy-800 text-slate-300 hover:bg-navy-700 hover:text-white"
                  }`}
                >
                  All Media
                </button>
                <button
                  onClick={() => setFilter("image")}
                  className={`px-6 py-2 rounded-lg font-body font-medium transition-all duration-300 flex items-center gap-2 ${
                    filter === "image"
                      ? "bg-teal-500 text-white shadow-lg shadow-teal-500/30"
                      : "bg-navy-800 text-slate-300 hover:bg-navy-700 hover:text-white"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Photos
                </button>
                <button
                  onClick={() => setFilter("video")}
                  className={`px-6 py-2 rounded-lg font-body font-medium transition-all duration-300 flex items-center gap-2 ${
                    filter === "video"
                      ? "bg-teal-500 text-white shadow-lg shadow-teal-500/30"
                      : "bg-navy-800 text-slate-300 hover:bg-navy-700 hover:text-white"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Videos
                </button>
              </motion.div>

              {/* Gallery Grid */}
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence>
                  {filteredItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      onClick={() => setSelectedItem(item)}
                      className="group relative cursor-pointer rounded-xl overflow-hidden bg-navy-800 border border-white/5 hover:border-teal-500/30 transition-all duration-300"
                    >
                      {/* Media Container */}
                      <div className="relative overflow-hidden aspect-[4/3]">
                        {item.type === "image" ? (
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                          />
                        ) : (
                          <div className="relative w-full h-full">
                            <img
                              src={item.poster}
                              alt={item.alt}
                              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                            />
                            {/* Video Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
                              <div className="w-16 h-16 rounded-full bg-teal-500/90 backdrop-blur-sm flex items-center justify-center transform transition-transform group-hover:scale-110">
                                <svg
                                  className="w-8 h-8 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Media Type Badge */}
                        <div className="absolute top-4 left-4">
                          <div className="px-2 py-1 bg-navy-900/80 backdrop-blur-sm rounded-lg text-white text-xs font-body flex items-center gap-1">
                            {item.type === "image" ? (
                              <>
                                <svg
                                  className="w-3 h-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                <span>Photo</span>
                              </>
                            ) : (
                              <>
                                <svg
                                  className="w-3 h-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  />
                                </svg>
                                <span>Video</span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <h3 className="text-white font-display font-bold text-xl mb-2">
                              {item.title}
                            </h3>
                            <p className="text-slate-300 text-sm font-body">
                              {item.description}
                            </p>
                          </motion.div>
                        </div>

                        {/* Zoom/Play Icon on Hover */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-50">
                          <div className="w-10 h-10 bg-teal-500/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                            {item.type === "image" ? (
                              <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                />
                              </svg>
                            ) : (
                              <svg
                                className="w-5 h-5 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* Empty State */}
              {filteredItems.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">📷</div>
                  <p className="text-slate-400 text-lg">
                    No media found in this category
                  </p>
                </motion.div>
              )}
            </>
          )}
        </div>

        {/* Lightbox Modal for Images and Videos */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
              onClick={() => setSelectedItem(null)}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-navy-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-navy-700 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Previous button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-6 z-10 w-12 h-12 bg-navy-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-navy-700 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Next button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-6 z-10 w-12 h-12 bg-navy-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-navy-700 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Media container */}
              <motion.div
                key={selectedItem.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-5xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedItem.type === "image" ? (
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    className="w-full h-full object-contain rounded-xl"
                  />
                ) : (
                  <video
                    src={selectedItem.src}
                    poster={selectedItem.poster}
                    controls
                    autoPlay
                    className="w-full h-full rounded-xl"
                    controlsList="nodownload"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}

                {/* Media info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
                  <h3 className="text-white font-display font-bold text-2xl">
                    {selectedItem.title}
                  </h3>
                  <p className="text-slate-300 text-md font-body mt-1">
                    {selectedItem.description}
                  </p>
                </div>
              </motion.div>

              {/* Media counter */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-navy-800/80 backdrop-blur-sm rounded-full text-white text-sm font-body">
                {filteredItems.findIndex(
                  (item) => item.id === selectedItem.id,
                ) + 1}{" "}
                / {filteredItems.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
