import Link from "next/link";
import Image from "next/image";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article className="flex flex-col shadow my-4">
        <Link href="/articles/page">
          <Image
            src="https://picsum.photos/800"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link
            href="#"
            className="text-blue-700 text-sm font-bold uppercase pb-4"
          >
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Next.js 勉強中
          </Link>
          <p className="text-sm pb-3 text-slate-900">
            By hiro, Published on 2025/1
          </p>
          <Link href="#" className="pb-6 text-slate-900">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </Link>
          <Link href="#" className="uppercase text-pink-800 hover:text-black">続きを読む</Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
