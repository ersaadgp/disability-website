import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Breaking Barriers in the Workplace",
    excerpt: "How modern offices are adapting to diverse needs.",
    category: "Workplace",
  },
  {
    title: "Success Stories: From Applicant to Manager",
    excerpt: "Inspiring detailed journey of one of our candidates.",
    category: "Success Stories",
  },
  {
    title: "The Future of Inclusive Hiring",
    excerpt: "Trends and predictions for the next decade.",
    category: "Trends",
  },
];

export function Articles() {
  return (
    <section className="py-24 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Latest Insights
            </h2>
            <p className="text-muted-foreground">
              News, tips, and stories from our community.
            </p>
          </div>
          <Link
            href="/articles"
            className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="h-48 bg-muted w-full relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-primary font-medium"
          >
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
