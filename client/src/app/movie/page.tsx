import Link from "next/link";
import { User } from "@/models";
import { getAllUsers } from "@/lib/getUser";

export default async function MoviePage() {
  const userData: Promise<User[]> = getAllUsers();

  const users = await userData;
  console.log("🚀 ~ file: page.tsx:9 ~ MoviePage ~ users:", users);

  return (
    <div>
      {/* {users.map((user) => {
        return (
          <>
            <p key={user._id}>
              <Link href={`/users/${user._id}`}>{user.username}</Link>
            </p>
            <br />
          </>
        );
      })} */}
      this is movie page
    </div>
  );
}
