import { db } from "@/db";
import paths from "../../path";
import Link from "next/link";

export default async function TopicList() {
  const topic = await db.topic.findMany();

  const renderTopic = topic.map((topicist) => {
    return (
      <Link
        key={topicist.id}
        href={paths.topicShow(topicist.slug)}
        className="block"
      >
        <div
          className="
            rounded-xl
            border
            bg-card
            px-5
            py-4
            text-base
            font-semibold
            transition-all
            duration-200
            hover:border-primary/40
            hover:bg-muted/50
            hover:text-primary
            hover:shadow-sm
          "
        >
          {topicist.slug}
        </div>
      </Link>
    );
  });

  return <div className="flex flex-col gap-3">{renderTopic}</div>;
}
