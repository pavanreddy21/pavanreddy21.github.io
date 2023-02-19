import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'

export default function Achievements() {
  return (
    <>
      <PageSeo
        title={`Achievements ${siteMetadata.author}`}
        description={`Achievements ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/achievements`}
      />

      <div className="">
        <div className="pt-6 pb-6 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-1">
            Achievements
          </h1>
        </div>
        <div className="" >
          <div className="pt-6 pb-1">
            <h3 className="font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl">
              Recognitions
            </h3>
          </div>



          <div className="pt-4 pb-4 flex flex-col items-start justify-start md:flex-row md:mt-6 border border-blue-200 rounded dark:border-gray-800 bg-blue-50 dark:bg-slate-900 rounded-md">


            <ul className="list-disc  md:list px-8 py-4 dark:text-gray-100 rounded">

              <li>Won 3rd place in the ACM-OSU Hackathon 2022,  <a href="https://news.okstate.edu/articles/cowboy-innovations/2022/2022hackathonawards.html">(Link)</a> among a field of highly competitive participants, for Creating an Airbnb-type app for Gameday Parking.</li>
              <li>Secured 2nd place at the School of AI Healthcare Hackathon in Hyderabad, where we developed an innovative solution for Pneumonia detection using X-Ray images.</li>


              <li>Achieved 3rd place in the Student Innovation competition held across the college, for my project on Smart Electricity.</li>
              <li>Served as a member of the organizing team for the International Blockchain Congress 2018, one of India's largest blockchain conferences, where I helped plan and execute a successful event</li>
            </ul>
          </div>








        </div>

      </div>

    </>
  )
}
