import PostCard from "@/components/PostCard";

export default async function Home() {
  return (
    <div className="mx-36 my-10">
      <h3 className="text-2xl font-bold mb-10">Featured Posts</h3>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
        {Array.from({ length: 10 }, (_, index) => (
          <PostCard key={index} />
        ))}
      </div>
    </div>
  );
}
