import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button"
import ReactPlayer from 'react-player'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const habilities = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9 } },
  hidden: { opacity: 0, scale: 0 }
};

const images = [
  { src: "https://img.icons8.com/?size=100&id=8gfeOoqrHqJU&format=png&color=000000", alt: "figma-logo" },
  { src: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000", alt: "git-logo" },
  { src: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000", alt: "css-logo" },
  { src: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000", alt: "html-logo" },
  { src: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000", alt: "mongo-logo" },
  { src: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000", alt: "react-logo" },
  { src: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000", alt: "mysql-logo" },
  { src: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000", alt: "express-logo" },
  { src: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000", alt: "javascript-logo" },
  { src: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000", alt: "typescript-logo" },
  { src: "https://img.icons8.com/?size=100&id=EZQdGLNeo7JI&format=png&color=000000", alt: "cava-logo" },
  { src: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000", alt: "java-logo" }
];

const AnimatedImage = ({ src, alt }: { src: string, alt: string }) => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      initial="hidden"
      animate={control}
      variants={habilities}
    />
  );
};

export const Main = () => {
  return (
    <main className=" min-h-full text-gray-950 mt-3">
      <section id="about">
        <Card className=" text-white bg-slate-700 text-center">
          <CardHeader>
            <CardTitle className="text-xl font-bold">SOBRE MIM</CardTitle>
          </CardHeader>
          <CardContent className="tracking-widest p-2">
            <p>
              Olá, sou Isa Neide, é um prazer ter-lhe aqui.
              Sou desenvolvedora júnior fullstack, formada em
              Engenharia de software, apaixonada por desenvolvimento
              backend, entusiasta na área da Inteligência artificial
              e especialista em transformar ideias em soluções digitais.
            </p>
<Button variant="link" className="p-6 rounded-xl bg-slate-950 mt-2">
  <a target="_blank" href="https://drive.google.com/file/d/18Qq5QRQuh1hftkky9mDSclInT3wmmvvd/view?usp=sharing">Baixar Cv</a>
</Button>
          </CardContent>
        </Card>  

        <Card className="bg-white text-slate-950 mt-4 text-xl text-center">
          <CardHeader>
            <CardTitle>HABILIDADES</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-8 self-center">
            {images.map((img, i) => (
              <AnimatedImage key={i} src={img.src} alt={img.alt} />
            ))}
          </CardContent>
        </Card>
      </section>
      <section id="Projects" className="text-center mt-4">
        <h1 className="text-xl font-bold">PROJECTOS</h1>
        <Card>
           <CardHeader>
            <CardTitle>Spotdados</CardTitle>
            <CardContent>
              <ReactPlayer
              muted={true}
              src="../../img/spotdados.mp4"/>
                
            </CardContent>
            <CardDescription></CardDescription>
            <CardFooter></CardFooter>
           </CardHeader> 
        </Card>
        <Card className="text-slate-950">
           <CardHeader>
            <CardTitle>Mongoose</CardTitle>
            <CardContent>
              <img src="../../img/mongoose.png" alt="prototipo-mongoose" />
            </CardContent>
            <CardDescription>
              <p>Projecto de marcação de fila para serviços bancários desenvolvido no hackthon do programa Bytes4Future.</p>
            </CardDescription>
            <CardFooter></CardFooter>
           </CardHeader> 
        </Card>
      </section>
      <section id="contact">
        <h1 className="text-xl">VAMOS CONVERSAR!</h1>
      </section>
    </main>
  );
};
