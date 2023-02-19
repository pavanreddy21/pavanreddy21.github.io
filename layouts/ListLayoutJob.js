/* eslint-disable prettier/prettier */
import Link from '@/components/Link'
import { useState } from 'react'


export default function ListLayoutJob({ posts, title }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.startdate + frontMatter.enddate + frontMatter.location + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })


  return (
    <>
      <div className="">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        <ul>
          {!filteredBlogPosts.length && 'Sorry. No results found.'}
          {filteredBlogPosts.map((frontMatter) => {
            const { slug, date, title, startdate, location, enddate, summary, designation, tags } = frontMatter
            return (
              <li key={slug} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      {startdate}
                      <span> - </span>
                      {enddate}
                      <br />
                      {location}
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h3>
                      <div className="prose font-bold text-green-500 dark:text-cyan-400 hover:text-blue-600 dark:hover:text-blue-400 max-w-none ">
                        {designation}
                      </div>

                    </div>
                    <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                      {summary.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
