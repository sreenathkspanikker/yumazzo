export const getOnlyCharactersRule = (fieldName: string) => ({
  pattern: /^[A-Za-z\s]+$/,
  message: `Please input only characters (letters) for the ${fieldName}!`,
});

export const getOnlyNumbersRule = (fieldName: string) => ({
  validator(rule: any, value: any) {
    if (!value || /^\d+(\.\d+)?( ?grams)?$/.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject(`Please input a valid ${fieldName}!`);
  },
});

