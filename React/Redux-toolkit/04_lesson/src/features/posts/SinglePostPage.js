import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SinglePostPage = () => {
  // 라우터 사용시 파라미터 정보를 가져와 활용하려면 useParams()를 사용하면 됨
  // 파라미터 (매개변수) id와 라우트를 매치
  // useRef를 사용하듯 변수로 선언해준다.
  const { postId } = useParams();
  // state와 postid를 인자로 받음
  const post = useSelector((state) => selectPostById(state, Number(postId)));

  // post가 없으면
  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className="postCredit">
        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default SinglePostPage;
