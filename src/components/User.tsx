import type { User as UserType } from "../types/User";

const response = await fetch("https://randomuser.me/api/");
const data = await response.json();
const randomUser: UserType = data.results[0];

/**
 * @returns ランダムなユーザーの名前を表示する
 */
export const User = () => {
  if (!randomUser) return null;
  return <p>{randomUser.id.name}</p>;
};
