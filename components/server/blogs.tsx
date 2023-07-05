import db from "@/utils/database";
import Card from "./Card";

export default async function Blogs() {
  const blogs = await db.post.findMany({
    orderBy: {
      created_at: "desc",
    },
    take: 10,
  });

  return (
    <div className="my-5 flex w-full flex-col items-center justify-center pb-6 md:flex-row md:flex-wrap md:items-start">
      {blogs?.map((blog, index) => {
        return (
          <Card
            key={index}
            title={blog.title}
            author={blog.author}
            link={`/blog/${blog.author}/${blog.slug}`}
          />
        );
      })}
    </div>
  );
}
