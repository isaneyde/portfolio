import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
export const Footer=()=>{
    return(
    <footer>
        <div className="w-screen h-20 bg-black text-white">
            <p>&copy; {new Date().getFullYear()}. Todos Direitos Reservados.</p>
            <div className="flex">
                <LinkedinLogoIcon size={36} className="rounded-3xl" fill="blue" weight="bold"/>
                <GithubLogoIcon size={36} weight="bold" fill="white"/>
            </div>
        </div>
    </footer>    
    )
}