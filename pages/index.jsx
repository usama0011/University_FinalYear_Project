import Head from 'next/head'
import Image from 'next/image'
import Banefits from '../components/Banefits'
import Banner from '../components/Banner'
import CommunityExperts from '../components/CommunityExperts'
import Education from '../components/Education'
import Footer from '../components/Footer'
import QuickFact from '../components/QuickFacts'
import UpcomingEvents from '../components/UpCommingEvents'
import VisitAndApply from '../components/VisitAndApply'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to UMH SkyLine</title>
        <meta name="description" content="university website interface UMH" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <main className={styles.main}>
      <Banner/>
      <Education/>        
      <QuickFact/>
      <Banefits/>
      <VisitAndApply/>
      <UpcomingEvents/>
      <CommunityExperts/>
       </main>
      <Footer/>
    </div>
  )
}
