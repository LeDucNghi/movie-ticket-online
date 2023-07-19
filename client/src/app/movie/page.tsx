import Link from "next/link";
import { User } from "@/models";
import { getAllUsers } from "@/lib/getUser";

export default async function MoviePage() {
  // const userData: Promise<User[]> = getAllUsers();

  // const users = await userData;

  return (
    <div>
      {/* {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })} */}
      this is movie page
    </div>
  );
}
