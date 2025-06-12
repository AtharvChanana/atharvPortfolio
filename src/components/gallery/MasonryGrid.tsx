"use client";

import Masonry from "react-masonry-css";
import { Media, Text, Flex } from "@once-ui-system/core";
import styles from "./Gallery.module.scss";
import { gallery } from "@/resources";
import { Gallery } from "@/types";

// Type assertion for the gallery object
const typedGallery = gallery as unknown as Gallery;

export default function MasonryGrid() {
  const breakpointColumnsObj = {
    default: 2,
    720: 1,
  };

  // Handle case where gallery or gallery.images is null/undefined
  if (!typedGallery?.images || typedGallery.images.length === 0) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '2rem' 
      }}>
        <Text variant="body-default-l" onBackground="neutral-medium">
          No images available in the gallery.
        </Text>
      </div>
    );
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {typedGallery.images.map((image, index: number) => (
        <Media
          priority={index < 10}
          sizes="(max-width: 560px) 100vw, 50vw"
          key={index}
          radius="m"
          aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
          src={image.src}
          alt={image.alt || `Gallery image ${index + 1}`}
          className={styles.gridItem}
        />
      ))}
    </Masonry>
  );
}
