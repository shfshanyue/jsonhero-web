import { Body } from "../Primitives/Body";
import { HomeApiHeroLaptop } from "./HomeApiHeroLaptop";

export function HomeApiHeroBanner() {
  return (
    <div className="flex items-center justify-start w-full h-40 transition md:justify-center bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-600 hover:backdrop-filter hover:backdrop-brightness-75">
      <div className="relative flex items-center justify-center w-1/2 pl-6 md:w-full md:px-6">
        <div className="flex flex-col mr-4">
          <Body className="text-2xl font-bold leading-tight text-white md:text-4xl">
            Welcome to Apifox
          </Body>
          <p className="mb-2 text-white">
            <span className="font-bold">API Hub</span> – integrate APIs in
            seconds!
          </p>
          <a
            href="https://apifox.cn/a1shanyue"
            target="new"
            className="flex items-center justify-center px-3 py-2 mt-2 text-lg font-bold text-center transition rounded shadow-md md:text-xl text-slate-800 bg-lime-500 hover:bg-lime-400"
          >
            Apifox API Hub
          </a>
        </div>
        <a
          href="https://apifox.cn/a1shanyue"
          target="new"
          className="absolute md:relative -top-5 md:top-auto -right-[20rem] md:right-auto"
        >
          <HomeApiHeroLaptop className="mb-2 rounded-lg w-50 md:w-80"></HomeApiHeroLaptop>
        </a>
      </div>
    </div>
  );
}
