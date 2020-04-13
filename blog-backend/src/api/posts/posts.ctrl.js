let postId = 1; // 1로 초깃값

// posts 배열 초기 데이터
const posts = [
    {
        id: 1,
        title: '제목',
        body: '내용',
    },
];

/* 포스트 작성
 POST /api/posts
 { title, body }
 */

exports.write = (ctx) => {
    // REST API의 Request Body는 ctx.request.body에서 조회할 수 있습니다.
    const { title, body } = ctx.request.body; // 비구조화 할당
    postId += 1; // 기존 postId 값에 1을 더합니다. 글을 쓸 때마다 1씩 더한 Id 값에 저장해줍니다.
    const post = { id: postId, title, body }; // post 변수에 객체 담음
    posts.push(post); // posts 배열 객체에 객체를 추가로 담아서 JSON 형태로 만듭니다.
    ctx.body = post; // body로 되돌려줍니다.
};
