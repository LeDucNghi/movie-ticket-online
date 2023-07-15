import Link from "next/link";
import { User } from "@/models";
import { getAllUsers } from "@/lib/getUser";

export default async function MoviePage() {
  const userData: Promise<User[]> = getAllUsers();

  const users = await userData;

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

export async function getStaticProps() {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const userData: Promise<User[]> = getAllUsers();

  const users = await userData;

  // Pass post data to the page via props
  return { props: { users } };
}
