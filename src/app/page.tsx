import CreateTopic from "@/components/topics/topic-create-form";
import { Separator } from "../components/ui/separator";
import TopicList from "@/components/topics/topic-list";

export default function Home() {
  return (
    <div className="flex min-h-screen gap-8 bg-muted/30 p-8">
      <div className="flex-1">
        <h1 className="text-2xl font-bold tracking-tight">Top Posts</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Discover the latest posts from the community.
        </p>
      </div>
      <div
        className="
          w-full max-w-md
          rounded-2xl
          border border-border/70
          bg-card
          p-6
          shadow-sm
    "
      >
        <CreateTopic />
        <Separator className="my-6" />
        <div className="mb-5">
          <h3 className="text-xl font-semibold tracking-tight text-center">
            Topics
          </h3>
          <p className="mt-1 text-sm text-muted-foreground text-center">
            Explore topics and join the conversation.
          </p>
        </div>
        <div className="max-h-500 overflow-y-auto">
          <TopicList />
        </div>
      </div>
    </div>
  );
}
