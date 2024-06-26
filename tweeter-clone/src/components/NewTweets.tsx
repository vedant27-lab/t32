import { api } from "../utils/api";
import { useSession } from "next-auth/react";

const NewTweet = () => {
  const { data: session } = useSession();
  const { mutate } = api.tweet.create.useMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const content = formData.get("content") as string;
    mutate({ content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea name="content" placeholder="What's happening?" />
      <button type="submit">Tweet</button>
    </form>
  );
};

export default NewTweet;