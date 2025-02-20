// lib/news.ts
export type NewsItem = {
    id: number;
    title: string;
    date: string;
    content: string;
};

export const newsData: NewsItem[] = [
    {
        id: 1,
        title: "TSMC Expands Arizona Factory",
        date: "Feb 15, 2025",
        content: "TSMC announced a major expansion of its Arizona factory to meet growing chip demand...",
    },
    {
        id: 2,
        title: "TSMC Unveils 3nm Chip Tech",
        date: "Feb 10, 2025",
        content: "TSMC’s latest 3nm technology promises faster and more efficient processors...",
    },
    {
        id: 3,
        title: "TSMC Q1 Profits Soar",
        date: "Feb 5, 2025",
        content: "TSMC reported record-breaking profits in Q1 2025, driven by AI chip sales...",
    },
];