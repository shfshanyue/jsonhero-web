import { formatStarCount } from "~/utilities/formatStarCount";
import { GithubIconSimple } from "../Icons/GithubIconSimple";
import { Body } from "../Primitives/Body";
import { useStarCount } from "../StarCountProvider";

export type GithubStarProps = {
  className?: string;
};

export function GithubStar({ className }: GithubStarProps) {
  const starCount = useStarCount();

  return (
    <a
      href="https://github.com/apihero-run/jsonhero-web"
      target="_blank"
      className="flex transition text-slate-700 opacity-90 hover:cursor-pointer hover:opacity-100"
    >
      <div className="flex items-center gap-1 py-1 pl-1 pr-2 rounded-l-sm bg-slate-300">
        <GithubIconSimple className="w-4 h-4 ml-1"></GithubIconSimple>
        <Body className="font-semibold text-slate-800">Fork</Body>
      </div>
      {starCount && (
        <div className="px-2 py-1 border-l rounded-r-sm border-slate-400 bg-slate-100">
          <Body className="font-bold">{formatStarCount(starCount)}</Body>
        </div>
      )}
    </a>
  );
}
