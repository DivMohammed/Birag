import AllPosts from "@/actions/all-posts";
import AddPost from "@/components/add-post";
import prisma from "@/lib/prismadb";

const  Home = async ({
  params
} : { 
  params: { Id: string }
}) => {

  const posts = await prisma.post.findMany({
    where: {}
});

const users = await prisma.user.findMany({
  where: {}
});

const user = await prisma.user.findUnique({
  where: {
      id: params.Id
  }
});

    return (
      <div className=" relative">
      <AllPosts posts={posts} users={users}/>
      <AddPost data={user} className="fixed bottom-0 p-1 left-[70px] transform -translate-x-1/2 -translate-y-1/2"/>
      </div>
    );
  }

  export default Home