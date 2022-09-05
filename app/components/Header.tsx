import { ShareIcon, PlusIcon } from "@heroicons/react/outline";
import { DocumentTitle } from "./DocumentTitle";
import { DiscordIconTransparent } from "./Icons/DiscordIconTransparent";
import { EmailIconTransparent } from "./Icons/EmailIconTransparent";
import { GithubStar } from "./UI/GithubStar";
import { Logo } from "./Icons/Logo";
import { Share } from "./Share";
import { NewDocument } from "./NewDocument";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "./UI/Popover";
import { Body } from "./Primitives/Body";

export function Header() {
  return (
    <header className="flex items-center justify-between w-screen h-[40px] bg-indigo-700 dark:bg-slate-800 border-b-[1px] border-slate-600">
      <Logo className="pl-1 pr-2" width={"130"} />
      <DocumentTitle />
      <ol className="flex items-center gap-2 px-4">
        <Popover>
          <PopoverTrigger>
            <button className="flex items-center justify-center px-2 py-1 text-base font-bold uppercase transition rounded-sm bg-lime-500 text-slate-800 bg-opacity-90 hover:cursor-pointer hover:bg-opacity-100">
              <PlusIcon className="w-4 h-4 mr-0.5"></PlusIcon>
              New
            </button>
          </PopoverTrigger>
          <PopoverContent side="bottom" sideOffset={8}>
            <NewDocument />
            <PopoverArrow
              className="text-indigo-700 fill-current"
              offset={20}
            />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <button className="flex items-center justify-center px-2 py-1 text-base font-bold uppercase transition rounded-sm bg-slate-200 text-slate-800 bg-opacity-90 hover:cursor-pointer hover:bg-opacity-100">
              <ShareIcon className="w-4 h-4 mr-1"></ShareIcon>
              Share
            </button>
          </PopoverTrigger>
          <PopoverContent side="bottom" sideOffset={8}>
            <Share />
            <PopoverArrow
              className="text-indigo-700 fill-current"
              offset={20}
            />
          </PopoverContent>
        </Popover>

        <li className="transition opacity-90 hover:cursor-pointer hover:opacity-100">
          <GithubStar />
        </li>
        <li className="transition hover:cursor-pointer opacity-90 hover:opacity-100">
          <a
            href="https://apifox.cn/a1shanyue"
            target="_blank"
            className="flex transition text-slate-700 opacity-90 hover:cursor-pointer hover:opacity-100"
          >
            <div className="flex items-center gap-1 px-2 py-1 rounded-l-sm p2-1 bg-slate-300">
              <Body className="font-semibold text-slate-800">Apifox</Body>
            </div>
          </a>
        </li>
        {/* <li className="transition hover:cursor-pointer opacity-90 hover:opacity-100">
          <a href="mailto:hello@jsonhero.io">
            <EmailIconTransparent />
          </a>
        </li>
        <li className="transition opacity-90 hover:cursor-pointer hover:opacity-100">
          <a href="https://discord.gg/ZQq6Had5nP" target="_blank">
            <DiscordIconTransparent />
          </a>
        </li> */}
      </ol>
    </header>
  );
}
