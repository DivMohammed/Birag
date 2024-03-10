import prisma from "@/lib/prismadb";

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

    return (
        <div>{user?.name}</div>
    )
}

export default ProfilePage;