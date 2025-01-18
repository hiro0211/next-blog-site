"use client";
import { createArticle } from "@/blogAPI";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateBlogPage = () => {
  const router = useRouter();
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // フォームの入力値を更新する関数
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setId(e.target.value);
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  // フォームの送信処理
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    await createArticle(id, title, content);

    setLoading(false);
    router.push(`/articles/${id}`);
    router.refresh();
  };

  return (
    <div className="min-h-screen py- px-4 md:px-1">
      <h2 className="text-2xl font-bold mb-4">ブログ新規作成</h2>
      <form
        className="bg-slate-200 p-6 rounded shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">URL</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={handleTextChange}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">
            タイトル
          </label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">本文</label>
          <textarea
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={handleContentChange}
          />
        </div>

        <button
          type="submit"
          className={`py-2 px-4 border rounded-md ${
            loading
              ? "bg-orange-300 cursor-not-allowed rounded-full "
              : "bg-orange-400 hover:bg-orange-500"
          } `}
          disabled={loading}
        >
          {loading ? (
            <div
              className="absolute inset-0 flex justify-center items-center"
              aria-label="Loading"
            >
              <div className="w-6 h-6 border-4 border-t-transparent border-orange-600 rounded-full animate-spin"></div>
            </div>
          ) : (
            "投稿"
          )}
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
