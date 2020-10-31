import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, src, slug, link }) {
  const image = (
    <img
      src={src}
      alt={`Duma zilei - ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="-mx-5 sm:mx-0">
      {/* {image} */}
      {/* {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )} */}
      {link ? (
        <Link as={`${link}`} href="[link]">
          <a target="_blank" aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
