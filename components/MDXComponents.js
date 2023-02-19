import Image from 'next/image'
import CustomLink from './Link'
import siteMetadata from '@/data/siteMetadata'
const MDXComponents = {
  Image,
  a: CustomLink,
}

export default MDXComponents
