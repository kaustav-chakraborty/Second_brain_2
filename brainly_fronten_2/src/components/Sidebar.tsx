import { Documents } from "../icons/Documents";
import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./Sidebaritems";

export function Sidebar(){
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
        <div className="flex text-2xl pt-4 items-center">
            <div className="pr-2 text-purple-600">
                <Logo></Logo>
                Brainly

            </div>

        </div>
        <div className="pt-4 pl-4">
            <SidebarItem text="Twitter" icon={<TwitterIcon></TwitterIcon>}></SidebarItem>
            <SidebarItem text="Youtube" icon={<YoutubeIcon></YoutubeIcon>}></SidebarItem>
            <SidebarItem text="Document" icon={<Documents></Documents>}></SidebarItem>

        </div>

    </div>
}