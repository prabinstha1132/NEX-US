import CreateTopic from "@/components/topics/topic-create-form";
export default function Home() {
  return (
    <div className="mx-auto mt-11 flex w-full max-w-6xl items-center justify-between px-3">
      <h1>Top Post</h1>
      <CreateTopic />
    </div>
  );
}
