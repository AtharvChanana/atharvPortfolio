import { Flex, Meta, Schema } from "@once-ui-system/core";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL, gallery, person } from "@/resources";

// Create a safe reference to gallery data
const galleryData = gallery || {
  title: 'Gallery',
  description: 'View my photo gallery',
  path: '/gallery'
};

export async function generateMetadata() {
  if (!galleryData) {
    return {
      title: 'Gallery',
      description: 'View my photo gallery',
    };
  }

  return Meta.generate({
    title: galleryData.title || 'Gallery',
    description: galleryData.description || 'View my photo gallery',
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(galleryData.title || 'Gallery')}`,
    path: galleryData.path || '/gallery',
  });
}

export default function Gallery() {
  // Additional safety check for gallery data
  if (!galleryData || !galleryData.title) {
    return (
      <Flex maxWidth="l" vertical="center" horizontal="center" padding="xl">
        <p>Gallery is currently unavailable. Please check back later.</p>
      </Flex>
    );
  }

  return (
    <Flex maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={galleryData.title}
        description={galleryData.description}
        path={galleryData.path}
        image={`/api/og/generate?title=${encodeURIComponent(galleryData.title)}`}
        author={{
          name: person?.name || '',
          url: `${baseURL}${galleryData.path}`,
          image: person?.avatar ? `${baseURL}${person.avatar}` : undefined,
        }}
      />
      <MasonryGrid />
    </Flex>
  );
}
