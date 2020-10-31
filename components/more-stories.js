import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Mai multe dume, nu rata!
      </h2>
      <h3 className="mb-8 text-2xl md:text-3xl tracking-tighter leading-tight">Click pe imagine sau pe titlu sa lasi un raspuns!</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            link={post.link}
          />
        ))}
      </div>
    </section>
  )
}
