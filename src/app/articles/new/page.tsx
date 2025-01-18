import React from "react";

const CreateBlogPage = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  }

  return (
    <div className="min-h-screen py- px-4 md:px-1">
      <h2 className="text-2xl font-bold mb-4">ブログ新規作成</h2>
      <form className="bg-slate-200 p-6 rounded shadow-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">URL</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">タイトル</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">本文</label>
          <textarea
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>

        <button type="submit" className="py-2 px-4 border rounded-md bg-orange-300">投稿</button>
      </form>
    </div>
    
  );
};

export default CreateBlogPage;
