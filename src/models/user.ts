export type User = {
  id: number,
  name: string,
  status: string,
  photos: {
    large: string,
    small: string,
  };
  followed: boolean,
};
