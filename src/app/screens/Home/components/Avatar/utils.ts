export const getInitials = (fullName: string) => {
  const fullNameArray = fullName.split(' ');
  const givenName = fullNameArray[0];
  const familyName = fullNameArray[fullNameArray.length - 1];
  return `${givenName ? givenName[0] : ''}${familyName ? familyName[0] : ''}`.toUpperCase();
};
