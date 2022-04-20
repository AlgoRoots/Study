import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSlice";

const PostsList = () => {
  const dispatch = useDispatch();

  // postsSlice에서 생성한 리듀서 상태값 받아오기
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    // postsStatus 체크
    if (postsStatus === "idle") {
      // idle상태이면 fechPosts 미들웨어 thunk 로 dispatch한다.
      dispatch(fetchPosts());
    }
    // 의존성 배열
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    // spinner
    content = <p>"Loading..."</p>;
  } else if (postsStatus === "succeeded") {
    // 이전 포스트를 역정렬
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      // 각 포스트에 key값 넣기
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};
export default PostsList;
