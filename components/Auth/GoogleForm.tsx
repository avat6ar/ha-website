import { useAppDispatch } from "@/hooks/hooks";
import axios from "@/lib/axios";
import { setAuth } from "@/lib/features/auth/authSlice";
import { clearAuthEmail } from "@/lib/features/auth/session";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

interface GoogleCredentialData {
  name: string;
  email: string;
  sub: string;
}

export const GoogleForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSuccess = (credentialResponse: CredentialResponse) => {
    const credentialResponseDecode = jwtDecode<GoogleCredentialData>(
      credentialResponse.credential ?? ""
    );

    const data = {
      name: credentialResponseDecode?.name,
      email: credentialResponseDecode?.email,
      provider_id: credentialResponseDecode?.sub,
    };

    axios.post("/auth/login/google/register", data).then(({ data }) => {
      const { token, user } = data.data;

      dispatch(setAuth({ token, user }));
      clearAuthEmail();
      router.replace("/");
    });
  };

  return (
    <div className="*:w-full">
      <GoogleLogin
        onSuccess={onSuccess}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};
