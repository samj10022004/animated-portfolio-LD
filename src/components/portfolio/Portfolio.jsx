import { useRef } from "react"
import "./portfolio.scss"
import { motion,useScroll,useSpring, useTransform } from "framer-motion"

const items = [
    {
        id:1,
        title:"Snapgram",
        img:"./Snapgram.png",
        desc:"Discover a vibrant community of photographers on this platform, where you can share your best moments through high-resolution images. Engage in conversations, explore captivating still imagery, and connect with fellow artists. Say goodbye to video overload and embrace authentic, unfiltered photo sharing!"
    },
    {
        id:2,
        title:"Imagify",
        img:"./Imagify.png",
        desc:"Unlock the potential of your photos with our cutting-edge AI photo editor. Seamlessly enhance, retouch, and optimize your images using advanced algorithms. Whether you’re a professional photographer or just love snapping pictures, our intuitive interface and powerful AI tools will elevate your editing game!"
    },
    {
        id:3,
        title:"Ecommerce",
        img:"./Ecommerce.avif",
        desc:"An e-commerce website is an online store where goods and services are traded between buyers and sellers over the internet. Unlike a physical storefront, an e-commerce website can be accessed at any time, from anywhere, as long as there’s an internet connection."
    },
    {
        id:4,
        title:"Portfolio",
        img:"./Portfolio.png",
        desc:"A portfolio is a curated compilation of your best work. A portfolio website is simply a digital version of this that can be accessed and shared online. Portfolios serve as a tangible demonstration of one’s skills and abilities. Whether you’re an artist, designer, photographer, writer, or any other creative professional, a portfolio website allows you to showcase your projects, achievements, skills, and experiences in an organized and visually appealing manner."
    },
]

const Single=({item})=>{
    const ref = useRef();

    const {scrollYProgress}=useScroll({
        target:ref,
    });

    const y=useTransform(scrollYProgress,[0,1],[-300,300]);

    return(
        <section  >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="image"  />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2 >{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef();
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["end end","start start"],
    });
    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });


  return (
    <div className="portfolio">
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
      {items.map(item=>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio
