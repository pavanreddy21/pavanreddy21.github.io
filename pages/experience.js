import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'
import ListLayoutJob from '@/layouts/ListLayoutJob'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('jobs')

  return { props: { posts } }
}

export default function experience({ posts }) {
  return (
    <>
      <PageSeo
        title={`Experience${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/experience`}
      />
      <ListLayoutJob posts={posts} title="Experience" />
    </>
  )
}
