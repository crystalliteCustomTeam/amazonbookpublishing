import React from 'react'
import Link from 'next/link';

import FEATURED from '../component/MagazineWriting/featuredSec'
import LHMagazine from '../component/MagazineWriting/LetUsMagazine'
import GhostWriting from '../component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'
import HeaderContactForm from '../component/headerContactformNew';


import WMODE from '../component/workMode1'
import CTA from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'
import LogoSliders from '../component/bottomLogosNEW'




const MagazineWriting = () => {
  return (
    <>
      <main>

        <FEATURED
          banneraffordable='MagazineWriting1'
          title='Our Magazine Writers Bring It All Altogether'
          dec={` Attracting the reader at the first step can be tricky, but our expert writers effortlessly bring all the content together, instantly hooking your readers from the very first sentence.`}
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
        <LHMagazine />
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

export default MagazineWriting;
