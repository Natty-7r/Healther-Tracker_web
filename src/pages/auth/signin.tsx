import SignInForm from "@/components/form /signin.form";

const SignInPage = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-32 h-[90%]  overflow-auto py-2 sm:py-4 hideable_thin_scrollbar flex lg:items-center ">
      <div className="w-4/5 md:w-3/5 lg:w-1/2 mx-auto px-2 lg:p-8 border-none">
        <SignInForm />
      </div>
    </section>
  );
};

export default SignInPage;
