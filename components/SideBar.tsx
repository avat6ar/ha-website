import { SidebarLink } from "./Links";

export const Sidebar = () => {
  return (
    <>
      <div className="mb-[12px]">
        <h4 className="text-[19px] font-medium mb-[10px] relative font-heading text-[#082A5E] leading-[1.2] after:abolute after:block after:w-[28px] after:h-[4px] after:rounded-[50px] after:bg-[#1363DF] after:mt-[10px]">
          Pages
        </h4>
        <ul className="flex flex-col gap-[8px] w-full">
          <li className="block">
            <SidebarLink name="dashboard" url="/admin" />
          </li>
          <li className="block">
            <SidebarLink name="users" url="/admin/users" />
          </li>
          <li className="block">
            <SidebarLink name="instructors" url="/admin/instructors" />
          </li>
          <li className="block">
            <SidebarLink name="courses" url="/admin/courses" />
          </li>
          <li className="block">
            <SidebarLink name="chapters" url="/admin/chapters" />
          </li>
          <li className="block">
            <SidebarLink name="discounts" url="/admin/discounts" />
          </li>
          <li className="block">
            <SidebarLink name="lessons" url="/admin/lessons" />
          </li>
          <li className="block">
            <SidebarLink name="Reviews Course" url="/admin/reviews-course" />
          </li>
          <li className="block">
            <SidebarLink name="contacts" url="/admin/contacts" />
          </li>
          <li className="block">
            <SidebarLink name="Consulting" url="/admin/consultings" />
          </li>
          <li className="block">
            <SidebarLink name="blog" url="/admin/blog" />
          </li>
          <li className="block">
            <SidebarLink name="Quizz" url="/admin/quizz" />
          </li>
          <li className="block">
            <SidebarLink name="Question" url="/admin/questions" />
          </li>
          <li className="block">
            <SidebarLink name="Book Online" url="/admin/book-online" />
          </li>
          <li className="block">
            <SidebarLink name="File" url="/admin/file" />
          </li>
          <li className="block">
            <SidebarLink name="Courses categories" url="/admin/categories" />
          </li>
          <li className="block">
            <SidebarLink name="blogs categories" url="/admin/blog-categories" />
          </li>
        </ul>
      </div>
      <div className="w-full">
        <h4 className="text-[19px] font-medium mb-[10px] relative font-heading text-[#082A5E] leading-[1.2] after:abolute after:block after:w-[28px] after:h-[4px] after:rounded-[50px] after:bg-[#1363DF] after:mt-[10px]">
          Profile
        </h4>
        <ul className="flex flex-col gap-[8px] w-full">
          <li className="block">
            <SidebarLink name="profile" url="/profile" />
          </li>
        </ul>
      </div>
    </>
  );
};
