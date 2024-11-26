import { CoursesSwiper } from "@/components/Profile/CoursesSwiper";
import { HeroSection } from "@/components/HeroSection";
import { UserData } from "@/components/Profile/UserData";

const Profile = () => {
  return (
    <>
      <HeroSection
        array={[
          {
            name: "Home",
            url: "/",
          },
          "Profile",
        ]}
        title="Profile"
      />
      <UserData />
      <CoursesSwiper />
    </>
  );
};

export default Profile;
