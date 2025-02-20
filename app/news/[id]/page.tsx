// app/news/[id]/page.tsx
import { newsData } from "../../../lib/news";
import { notFound } from "next/navigation";

export default function NewsDetail({ params }: { params: { id: string } }) {
    const news = newsData.find((n) => n.id === parseInt(params.id));

    if (!news) {
        notFound(); // Shows a 404 page if news isn’t found
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
            <p className="text-gray-600 mb-4">{news.date}</p>
            <p>{news.content}</p>
        </div>
    );
}