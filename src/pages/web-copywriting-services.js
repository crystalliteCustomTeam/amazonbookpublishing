import React from 'react'
import Link from 'next/link';
import FEATURED from '../component/WebCopywritingServices/featuredSec'
import LHArticle from '../component/WebCopywritingServices/LetUsHelpWeb'
import GhostWriting from '../component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'
import CTA from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'
import HeaderContactForm from '../component/headerContactformNew';
import WMODE from '../component/workMode1'
import LogoSliders from '../component/bottomLogosNEW'


const WebCopywritingServices = () => {
  return (
    <>
      <main>

        <FEATURED
          banneraffordable='article'
          title='Develop Your Business with the Outstanding Skills and Expertise of Our Web Copywriters'
          dec={` Welcome to Barnett Ghostwriting. We offer professional web copywriting services, taking your website to the next level with the help of our expert copywriters.`}
          href1={<> <Link href=" " data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link href=" " className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        />
        <LogoSliders />
        <HeaderContactForm />
        <LHArticle />
        <GhostWriting />
        <CREATIVEGHOSTWRITERS />
        <CTA />
        <BTM />
        <WMODE />
        <SwiperComponents />

      </main>
    </>
  )
}

export default WebCopywritingServices;
