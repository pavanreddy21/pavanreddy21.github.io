import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        url={siteMetadata.siteUrl}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

          <div className="text-center">
         <div className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm rounded-full leading-6  quoteHome text-gray-900 dark:text-gray-100 ring-1 ring-gray-900/10 dark:ring-gray-100/10 hover:ring-gray-900/20">
         <span className="wavehand" role="img" aria-label="wave">&nbsp;👋🏻&nbsp;</span> Hello! I'm 
         </div>
          
          </div>
       
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Pavan Reddy Gottimukkula</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200 quoteHome">
          Software Engineer with a Passion for Creating <span className="enrichexp dark:text-gray-900">&nbsp;Impactful Apps</span>
            </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="./about" className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">know me <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      
    </div>
    </div>
    </>
  )
}
