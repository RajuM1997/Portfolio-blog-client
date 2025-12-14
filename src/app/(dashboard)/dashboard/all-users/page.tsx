import { getAllUsers } from "@/action/user/route";
import UserTable from "@/components/modules/User/UserTable";
import { getServerCookies } from "@/lib/getServerCookie";

const AllUsers = async () => {
  const token = await getServerCookies();
  const { data } = await getAllUsers(token as string);
  return (
    <div className="w-full max-w-7xl mx-auto py-5">
      <UserTable data={data} token={token as string} />
    </div>
  );
};

export default AllUsers;
