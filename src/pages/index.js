import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"
import Styles from './index.module.css'
import myPhoto from "../images/myphoto.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Menu/>
    <section className={Styles.wrapper}>
      <div className={Styles.body}>
        <div className={Styles.myPhotoSection}>
        <div className={Styles.photo}>
          <img src={myPhoto} alt="Ashok Kumar"></img>
        </div>
        <div className={Styles.infoTxt}>
          Team Leader experienced in directing the activities of workgroups. Adept
          at developing strategies, providing training, setting goals, and
          obtaining team feedback. Excellent interpersonal and communication
          skills. Big picture focus, communicating goals and vision to succeed.
          Problem solver, networker, and consensus builder. Proactive Team Member
          with 12 years of experience in different applications. Committed to
          maintaining efficiency and excellent quality assurance. Skilled at
          working with no supervision and knowledgeable about latest Frontend
          Technologies.
        </div>
    </div>
      </div>
      <div className={Styles.adv}>

      </div>
    </section>
  </Layout>
)

export default IndexPage
