import { UseMutationResult } from "@tanstack/react-query";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AxiosError, AxiosResponse } from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ErrorAlert<T extends UseMutationResult<any, any, any>>({
  mutation,
}: {
  mutation: T;
}) {
  return (
    <>
      {mutation.isError && (
        <Alert variant="destructive" className="my-3">
          <AlertTitle>{mutation.error?.message}</AlertTitle>
          <AlertDescription>
            {
              (
                (mutation.error as AxiosError<{ details: string }>)
                  ?.response as AxiosResponse
              )?.data?.detail
            }
          </AlertDescription>
        </Alert>
      )}
    </>
  );
}

export default ErrorAlert;
