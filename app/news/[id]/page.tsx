// app/news/[id]/page.tsx
import { newsData } from "../../../lib/news";
import { notFound } from "next/navigation";

// 定義參數的類型（Next.js 動態路由頁面預期）
type NewsPageProps = {
    params: { id: string };
};

export default function NewsDetail({ params }: NewsPageProps) {
    const news = newsData.find((n) => n.id === parseInt(params.id));

    if (!news) {
        notFound(); // 如果找不到新聞，返回 404
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
            <p className="text-gray-600 mb-4">{news.date}</p>
            <p>{news.content}</p>
        </div>
    );
}