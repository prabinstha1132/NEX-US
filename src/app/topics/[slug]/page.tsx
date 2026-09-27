interface TopicShowProps {
  params: Promise<{
    slug: string;
  }>;
}
export default async function TopicShow({ params }: TopicShowProps) {
  const { slug } = await params;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
