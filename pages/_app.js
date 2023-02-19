/* eslint-disable prettier/prettier */
import '@/css/tailwind.css'

import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react';
import { SEO } from '@/components/SEO'
import LayoutWrapper from '@/components/LayoutWrapper'
import MDXComponents from '@/components/MDXComponents'
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  return (
    
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <NextNProgress height={6} color="#00d09c"/>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <style>
          @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Poppins&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap');
          </style> 
          
        </Head>
        <DefaultSeo {...SEO} />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </MDXProvider>
      <Analytics />
    </ThemeProvider>
  )
}
