import { FormProvider, useForm } from "react-hook-form";

const LogPage = () => {
  const methods = useForm();

  return (
    <>
      <FormProvider {...methods}>
        <form>
          <input />
        </form>
      </FormProvider>
    </>
  );
};
export default LogPage;
