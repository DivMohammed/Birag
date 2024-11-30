import prisma from "@/lib/prismadb";

import FormImg from "./components/form-img";
import AddPost from "@/components/add-post";
import ShowPosts from "@/actions/show-posts";

const ProfilePage = async ({
    params 
    } : {
    params: { Id: string }
    }) => {

    const user = await prisma.user.findUnique({
        where: {
            id: params.Id
        }
    });

    const post = await prisma.post.findMany({
        where: {
            postId: params.Id
        }
    });

    return (
        <div className="relative">
        <FormImg data={user}/>
        <ShowPosts user={user} posts={post} />
        {/* <AddPost data={user} className="fixed bottom-0 p-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/> */}
        </div>
    )
}

export default ProfilePage;