import '@fontsource/inter/variable.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@/styles/globals.css';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Script from 'next/script';
import ProgressBar from 'nextjs-progressbar';
import PwaImages from '@/components/PwaImages';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps, router }) {
  return (
    <UserProvider>
      {process.env.NODE_ENV !== 'development' && (
        <Script
          strategy='afterInteractive'
          data-domains='staticshield.vercel.app'
          data-website-id={process.env.NEXT_PUBLIC_ANALYTICS_ID}
          src={process.env.NEXT_PUBLIC_ANALYTICS_URL}></Script>
      )}
      <Script strategy='afterInteractive'>
        (function(c,l,a,r,i,t,y){'{'}
        c[a]=c[a]||() =&gt; {'{'}(c[a].q=c[a].q||[]).push(arguments){'}'};
        t=l.createElement(r);t.async=1;t.src=&quot;https://www.clarity.ms/tag/&quot;+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        {'}'})(window, document, &quot;clarity&quot;, &quot;script&quot;,
        &quot;7c9tgf3vlc&quot;);
      </Script>
      <Head>
        <link rel='preconnect' href='https://vitals.vercel-insights.com/' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#000' />
      </Head>
      <NextSeo
        title='StaticShield'
        description='StaticShield is the easiest way to password protect websites'
        openGraph={{
          url: 'https://staticshield.vercel.app',
          title: 'StaticShield',
          description:
            'StaticShield is the easiest way to password protect websites',
          images: [
            {
              url: 'https://staticshield.vercel.app/ogimage.png',
            },
          ],
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@lalitcodes',
          cardType: 'summary_large_image',
        }}
      />

      <PwaImages />
      <motion.div
        key={router.route}
        initial='pageInitial'
        animate='pageAnimate'
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}>
        <ProgressBar height={3} color='#0170F3' />
        <GeistProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </GeistProvider>
      </motion.div>
    </UserProvider>
  );
}

export default MyApp;
