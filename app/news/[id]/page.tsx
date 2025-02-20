// app/news/[id]/page.tsx
import { newsData } from "../../../lib/news";
import { notFound } from "next/navigation";

// 直接定義函數參數的類型，不依賴自訂介面
export default function NewsDetail({ params }: { params: { id: string } }) {
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