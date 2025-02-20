// app/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Link from "next/link";
import axios from "axios";

// 定義新聞資料的型別
type NewsItem = {
  title: string;
  publishedAt: string;
  description: string;
  url: string;
};

// Server Component: 直接在這裡獲取資料
async function fetchNews() {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const url = `https://newsapi.org/v2/everything?q=TSMC&language=en&sortBy=publishedAt&apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data.articles.slice(0, 9); // 只拿前6篇新聞
  } catch (error) {
    console.error("獲取新聞失敗:", error);
    return [];
  }
}

export default async function Home() {
  const newsArticles: NewsItem[] = await fetchNews();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Latest TSMC News</h1>

      {/* 新聞列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsArticles.length > 0 ? (
          newsArticles.map((news, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{news.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">{news.publishedAt.slice(0, 10)}</p>
                <p className="text-sm mb-4">
                  {news.description?.slice(0, 100) || "No description available"}...
                </p>
                <a href={news.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Read More</Button>
                </a>
              </CardContent>
            </Card>
          ))
        ) : (
          <p>無法載入新聞，請稍後再試。</p>
        )}
      </div>
    </div>
  );
}