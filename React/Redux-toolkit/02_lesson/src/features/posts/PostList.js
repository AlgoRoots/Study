import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButton";

const PostList = () => {
  // state를 받고 state.post에서 상태를 받는다.
  // 만약 이 구조의 상테가 변경된다면 ? 이 컴포넌트는 스테
  //const posts = useSelector((state) => state.posts);

  // slice에서만 상태를 변경하면 된다.
  // 상태의 모양이 변경될 경우 각 구성 요소를 통과하고 변경할 필요가 없어진다.

  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  // map 함수를 위로 끌어올려 더 클린한 코드가 됨
  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostList;
