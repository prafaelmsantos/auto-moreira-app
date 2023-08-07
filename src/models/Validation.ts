export interface IValidation {
  name: string;
  error: boolean;
  message: string;
}

export const VerifyValidations = (
  array: IValidation[],
  id: string,
  error: boolean,
  errorMessage: string
) => {
  return (array[array.findIndex((x) => x.name === id)] = {
    ...array[array.findIndex((x) => x.name === id)],
    error: error,
    message: error ? errorMessage : "",
  });
};
