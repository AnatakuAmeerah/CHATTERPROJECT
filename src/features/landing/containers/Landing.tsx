import Button from "../button"
import Navbar from "../navBar"
import '../Landing.css'
import { Link } from "react-router-dom"
const Landing = () => {
  return (
    <>
            <section className="sticky">
                <Navbar />
            </section>
            <section id="home" className="section-two">
                <p className="optimize">A Traditional <span>Bookworm's</span><br /> Heaven</p>
                <p className="personalize">Unleash the Power of Words, connect with Like-minded <br />Readers and Writers </p>
                <div className='get-started'>
                    <Button><Link to="/create-account" className="linklogin">
                        Get started
                    </Link></Button>
                </div>
            </section>


            <section id='about' className='section-three'>
                <div >
                    <h3>About <span>Chatter</span></h3>
                    <p className='about'>Chatter is a multi-functional platform where authors and readers can have access to their own content. It aims to be a traditional bookworm’s heaven and a blog to get access to more text based content. Our vision is to foster an inclusive and vibrant community where diversity is celebrated. We encourage open-mindedness and respect for all individuals, regardless of their backgrounds or beliefs. By promoting dialogue and understanding, we strive. </p>
                </div>
                <div>
                    <img className='img-one' src="./anete.jpg" alt="img" />
                </div>
            </section>

            <section className='section-four'>
                <h3>Why you should join chatter</h3>
                <p>Our goal is to make writers and readers see our platform as their next heaven for blogging, ensuring ease in interactions, connecting with like-minded peers, have access to favorite content based on interests and able to communicate your great ideas with people</p>
                <div className='why'>
                    <div className='one'>
                        <img className='logo' src="./analytics-graph-bar.svg" alt="img" />
                        <p className='sub'>Analytics</p>
                        <p>Analytics to track the number of views, likes and comment and also analyze the performance of your articles over a period of time</p>
                    </div>
                    <div className='two'>
                        <img className='logo' src="./social-relations.svg" alt="img" />
                        <p className='sub'>Social Interactions</p>
                        <p>Users on the platform can interact with posts they like, comment and engage in discussions</p>
                    </div>
                    <div>
                        <img className='logo' src="./service-content-1.svg" alt="" />
                        <p className='sub'>Content Creation</p>
                        <p>Write nice and appealing with our in-built markdown, a rich text editor</p>
                    </div>
                </div>
            </section>

            <section className='section-five'>
                <img className='profile-img' src="./christopher-campbell-rDEOVtE7vOs-unsplash.jpg" alt="" />
                <div className='review-text'>
                    <p className='review-text-one'>"Chatter has become an integral part of my online experience. As a user of this incredible blogging platform, I have discovered a vibrant community of individuals who are passionate about sharing their ideas and engaging in thoughtful discussions.”</p>
                    <p className='review-text-two'>Adebobola Muhydeen, Software developer at Apple</p>
                    <Button><Link to="/create-account" className="linklogin">
                        Join Chatter
                    </Link></Button>
                </div>

            </section>



            <section key="to" id="contact"  className='section-six'>
                <img className='footer' src="./Chatter qed.svg" alt="" />
                <div>
                    <h4>Explore</h4>
                    <p>Community</p>
                    <p>Trending Blogs</p>
                    <p>Chatter for teams</p>

                </div>
                <div>
                    <h4>Support</h4>
                    <p>Support Docs</p>
                    <p>Join Slack</p>
                    <p>Contact</p>
                </div>
                <div>
                    <h4>Official Blog</h4>
                    <p>Official Blog</p>
                    <p>Engineering Blog</p>
                </div>
            </section>
        </>
  )
}

export default Landing