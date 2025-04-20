import { useMoveBack } from "../hooks/useMoveBack";
import Button from "../ui/Button";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="h-screen bg-gray-50 flex items-center justify-center p-[4.8rem]">
      <div className="bg-grey-0 border border-grey-100 rounded-md p-12 flex-[0_1_96rem] text-center">
        <h1 className="mb-[3.2rem]">
          The page you are looking for could not be found 😢
        </h1>
        <Button onClick={moveBack} size="large">
          &larr; Go back
        </Button>
      </div>
    </main>
  );
}

export default PageNotFound;
