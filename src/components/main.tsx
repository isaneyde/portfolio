"use client"
import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import {toast} from "sonner";
import {Toaster} from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  FormLabel,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea";
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
const formSchema = z.object({
  name: z.string().min(3, {
    message: "O nome deve ter no minímo 3 caracteres.",
  }),
   email: z.string().email("Digite um email válido.",),
   message: z.string().min(2, {
    
  }),
})


export const Main = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const sendEmail = async (data: z.infer<typeof formSchema>) => {
    try {
await emailjs.send(
    "service_wui7g0a",
          "template_you69z8",{
            name:data.name,
            email:data.email,
            message:data.message
          },
            "wWQMb8aQqBGANxeGd"
)
      await emailjs.send(
        "service_wui7g0a",
        "template_xgrnq1y",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "wWQMb8aQqBGANxeGd"
      );
      toast.success("Mensagem enviada com sucesso!");
      console.log("Enviado com sucesso")
    } catch (error: any) {
      toast.error("Erro ao enviar mensagem.");
      console.error("Erro ao enviar:", error);
    }
  };

  return (
    <>
    <Toaster richColors position="top-center"/>
    <main className="min-h-full text-gray-950 mt-3">
      <Element name="about">
          <section>
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
<Button className="p-6 rounded-xl mt-2">
  <a target="_blank" href="https://drive.google.com/file/d/18Qq5QRQuh1hftkky9mDSclInT3wmmvvd/view?usp=sharing">Baixar Cv</a>
</Button>
          </CardContent>
        </Card>  

        <Card className="bg-white text-slate-950 mt-4 text-xl text-center">
          <CardHeader>
            <CardTitle>HABILIDADES</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-8 self-center  md:grid-cols-4 space-x-20 gap-20">
            {images.map((img, i) => (
              <AnimatedImage key={i} src={img.src} alt={img.alt} />
            ))}
          </CardContent>
        </Card>
      </section>
      </Element>
    <Element name="projects">
 <section className="text-center mt-4">
        <h1 className="text-xl font-bold">PROJECTOS</h1>
        <Card>
           <CardHeader>
            <CardTitle>Spotdados</CardTitle>
            <CardContent>
             <img src="../../img/spotdados.png" alt="prototipo spotdados" />
                
            </CardContent>
            <CardDescription>Projecto de um aplicativo mobile com objectivo de apresentar dados do histórico dos usuários do aplicativo de música.</CardDescription>
       
           </CardHeader> 
        </Card>
        <Card className="text-slate-950">
           <CardHeader>
            <CardTitle>Mongoose</CardTitle>
            <CardContent>
              <img src="../../img/mongoose.png" alt="prototipo-mongoose" />
            </CardContent>
            <CardDescription>
              <p>Projecto de marcação de fila para serviços bancários desenvolvido no hackathon do programa Bytes4Future.</p>
            </CardDescription>
         
           </CardHeader> 
        </Card>
            <Card className="text-slate-950">
           <CardHeader>
            <CardTitle>Farmácia</CardTitle>
            <CardContent>
              <img src="../../img/farmacia.png" alt="prototipo-mongoose" />
            </CardContent>
            <CardDescription>
              <p>Projecto desenvolvido no âmbito académico para a criação de um aplicativo que facilitaa conexão entre pacientes farmácias.</p>
            </CardDescription>
      
           </CardHeader> 
        </Card>
      </section>
    </Element>
     <Element name="contact">
        <section className="text-center m-4" id="contact">
          <h1 className="text-xl">VAMOS CONVERSAR!</h1>
          <Card>
            <FormProvider {...form}>
              <form
                className="flex flex-col gap-4 p-4"
                onSubmit={form.handleSubmit(sendEmail)}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Enviar</Button>
              </form>
            </FormProvider>
          </Card>
        </section>
     </Element>   
    </main>
    </>
  );
};
