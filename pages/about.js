/* eslint-disable prettier/prettier */
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'
import Link from '@/components/Link'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About ${siteMetadata.author}`}
        description={`About me ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src="./static/images/pavan.jpeg" alt="avatar" className="h-32  rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={8} />
              <SocialIcon kind="github" href={siteMetadata.github} size={8} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={8} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} size={8} />
              <SocialIcon kind="instagram" href={siteMetadata.instagram} size={8} />
              <SocialIcon kind="googleScholar" href={siteMetadata.googleScholar} size={8} />

            </div>
            <div className="pt-8 flex flex-col items-center">
              <Link
                href={siteMetadata.resume}
              >
                <button className=" py-2 px-4 font-semibold bg-green-200 hover:bg-green-400 hover:text-white text-gray-900 dark:text-gray-100 border border-green-400 
          dark:border-gray-700  dark:bg-gray-600 rounded">
                  <span>Resume</span>
                </button>

              </Link>



            </div>

          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Hey There! Thanks for reading my description <br />
              
            <br/>
             I'm Pavan Reddy Gottimukkula.
              I am currenlty Pursuing my Masters at Oklahoma State University
            </p>
            <p>
              A highly motivated software engineer with 3+ years of experience in delivering impactful web applications, 
            I excel in fast-paced Startup environments and building innovative 0 - 1 products.
            <br/>
            <br/>
              Ready to take on new challenges and opportunities for growth, I'm excited to join a dynamic, cutting-edge company starting in Summer of 2023. 
              <br/>
              <br/>
              Find my work <Link href="https://github.com/pavanreddy21" className="text-blue-600">Github</Link>
              <br/>
              <p className="mb-8">You can also reach via: <Link href={`mailto:${siteMetadata.email}`} className="text-blue-600">Email</Link>, <Link href={siteMetadata.linkedin} className="text-blue-600">LinkedIn</Link>, <Link href={siteMetadata.twitter} className="text-blue-400">Twitter</Link>,  </p>

            </p>

            <p>
    
              Here are a few technologies I've worked on:
            </p>

            <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
              <div className="space-y-2 md:space-y-4">
                <ul className="md:list">
                  <li>HTML, CSS </li>
                  <li>JavaScript (ES6+)</li>
                  <li>React, Redux</li>
                  <li>Java, Spring, Spring Boot</li>

                  <li>Python, Ruby, Node.js</li>
                </ul>
              </div>
              <div className="pt-1 pb-0 prose dark:prose-dark max-w-none xl:col-span-2">
                <ul className="md:list">
                  <li>MongoDB </li>
                  <li>GraphQL</li>
                  <li>Kubernetes</li>
                  <li>Docker</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
