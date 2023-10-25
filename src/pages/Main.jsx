import React from 'react'
import Header from '../components/Header/Header'
import ContentData from '../components/Content/ContentData'
import AsideContent from '../components/Aside/AsideContent'
import Footer from '../components/Footer/Footer'

export default function Main() {
  return (
    <div>
        <Header />
        <div className="content">
            <main>
                <ContentData />
            </main>
            <aside>
                <AsideContent />
            </aside>
        </div>
        <Footer />
    </div>
  )
}
