import dynamic from "next/dynamic";
import { FormLoader } from "@/shared/components/form-loader";

const SignInPage = dynamic(() => import("@/modules/sign-in"), {
	loading: () => <FormLoader />,
});

export default function Page() {
	return <SignInPage />;
}
