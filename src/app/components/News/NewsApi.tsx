"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Link from "next/link";

export interface NewsData {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: null;
  url: string;
  urlToImage: null;
  publishedAt: string;
  content: null;
}

export interface Source {
  id: ID;
  name: Name;
}

export enum ID {
  GoogleNews = "google-news",
}

export enum Name {
  GoogleNews = "Google News",
}

const NewsApi = () => {
  const [news, setNews] = useState<NewsData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const getNews = async () => {
    const res = await axios.get<NewsData>(
      `https://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}`
    );
    setNews(res.data);
    setLoading(false);
  };

  getNews();
}, []);

  const allowedAuthors = ["infobae", "ámbito.com", "iProfesional.com"];

  const filteredArticles = news?.articles.filter((article) =>
    allowedAuthors.includes(article.author)
  );

  const authors = Array.from(
    new Set(filteredArticles?.map((article) => article.author))
  );

  const getAuthorArticles = (author: string) => {
    return filteredArticles?.filter((article) => article.author === author);
  };

  const getAuthorName = (author: string) => {
    if (author === "ámbito.com") {
      return "ámbito";
    } else if (author === "iProfesional.com") {
      return "iProfesional";
    }
    return author;
  };

  if (loading) {
    return (
      <div className="">
        <div className="h-8 max-w-[110px] animate-pulse rounded-lg bg-gray-400 dark:bg-gray-800"/>
        <div className="h-8 max-w-[320px] animate-pulse rounded-lg bg-gray-400 dark:bg-gray-800 mt-2"/>
        <div className="h-8 max-w-[620px] animate-pulse rounded-lg bg-gray-400 dark:bg-gray-800 mt-2"/>
        <div className="h-8 max-w-[120px] animate-pulse rounded-lg bg-gray-400 dark:bg-gray-800 mt-2"/>
        <div className="h-8 max-w-[620px] animate-pulse rounded-lg bg-gray-400 dark:bg-gray-800 mt-2"/>
        <div className="h-8 max-w-[120px] animate-pulse rounded-lg bg-gray-400 dark:bg-gray-800 mt-2"/>
      </div>
    );
  }

  return (
    <div>
      <div className="">
        <h1 className="text-2xl md:text-4xl ml-1 md:ml-3 font-bold text-gray-800 dark:text-gray-300">
          Noticias
        </h1>
        <Tabs value={0} className="max-w-[55rem]">
          <TabsHeader
            className="bg-transparent w-[8rem] md:w-[20rem]"
            indicatorProps={{
              className: "bg-gray-200 dark:bg-red-400 border border-black shadow-none !text-gray-900",
            }}
          >
            {authors?.map((author, index) => (
              <Tab key={index} className="" value={index}>
                <h2 className="text-gray-800 dark:text-gray-100 font-bold text-lg md:text-xl">
                  {getAuthorName(author)}
                </h2>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {authors?.map((author, index) => (
              <TabPanel key={index} value={index}>
                {getAuthorArticles(author)?.map(({ title, url }, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-300">{title}</h3>
                    <Link
                      className="text-red-400  font-bold  duration-300"
                      href={url}
                      target="_blank"
                    >
                      Leer más...
                    </Link>
                    <div className="my-4 h-[0.01rem] dark:bg-gray-200 bg-gray-800" />
                  </div>
                ))}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default NewsApi;