/* eslint-disable prettier/prettier */
import Image from 'next/image'
import Link from '@/components/Link'
import SocialIcon from '@/components/social-icons'

const AchCard = ({ title, description, imgSrc, href, githubURL }) => (
  <div className="p-4 md:w-1/2 md lg:w-1/3" style={{ maxWidth: '544px' }}>
   
    <div className="h-full cursor-pointer bg-slate-50 ring-1 ring-slate-900/5 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-100 rounded-md transform  hover:scale-[1.01] transition-all  duration-300  hover:shadow-lg active:scale-95 active:shadow-none overflow-hidden">
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="lg:h-48 md:h-36 object-cover object-center"
            width={544}
            height={306}
          />
        </Link>
      ) : (
        <Image
          alt={title}
          src={imgSrc}
          className="lg:h-48 md:h-36 object-cover object-center"
          width={544}
          height={306}
        />
      )}
      <div className="p-6">
        <h2 className="text-xl font-bold leading-8 tracking-tight mb-3">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose text-sm text-gray-500 max-w-none dark:text-gray-400 mb-3">
          {description}
        </p>
        <div className="mt-5">
          <div className="justify-end space-x-2">
            <button className="text-md hover:bg-green-400 font-semibold hover:text-white py-1 px-2 bg-green-200 hover:bg-green-400 text-gray-900 dark:text-gray-100 bg-green-200 hover:bg-green-400 hover:text-white text-gray-900 dark:text-gray-100 border border-green-400 
          dark:border-gray-700  dark:bg-gray-600 rounded">
              <a href={href}>Details</a>
            </button>
            <br />
            <SocialIcon kind="youtube" href={githubURL} className="hover:text-red-500" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default AchCard
