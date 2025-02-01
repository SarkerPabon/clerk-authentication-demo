import { auth, currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
	const authObj = await auth();
	console.log("Auth Object: ", authObj);

	const userObj = await currentUser();
	console.log("User Object: ", userObj);

	return <h1>Dashboard</h1>;
}
