type ResponsivePictureProps = {
  picture: PictureModule
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'sync' | 'auto'
  fetchPriority?: 'high' | 'low' | 'auto'
}

export default function ResponsivePicture({
  picture,
  alt,
  className,
  loading,
  decoding = 'async',
  fetchPriority,
}: ResponsivePictureProps) {
  return (
    <picture>
      <source type="image/avif" srcSet={picture.sources.avif} />
      <source type="image/webp" srcSet={picture.sources.webp} />
      <img
        src={picture.img.src}
        width={picture.img.w}
        height={picture.img.h}
        alt={alt}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        className={className}
      />
    </picture>
  )
}
