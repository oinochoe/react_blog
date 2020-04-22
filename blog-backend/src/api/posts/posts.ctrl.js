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
 * POST /api/posts
 * { title, body }
 */

export const write = (ctx) => {
    // REST API의 Request Body는 ctx.request.body에서 조회할 수 있습니다.
    const { title, body } = ctx.request.body; // 비구조화 할당
    postId += 1; // 기존 postId 값에 1을 더합니다. 글을 쓸 때마다 1씩 더한 Id 값에 저장해줍니다.
    const post = { id: postId, title, body }; // post 변수에 객체 담음
    posts.push(post); // posts 배열 객체에 객체를 추가로 담아서 JSON 형태로 만듭니다.
    ctx.body = post; // body로 되돌려줍니다.
};

/* 포스트 목록 조회
 * GET /api/posts
 */

export const list = (ctx) => {
    ctx.body = posts; // 리스트 조회는 그냥 posts를 불러온다. 현재 posts에 쌓인 목록만 보여주면 되니까..
};

/* 특정 포스트 조회
 * GET /api/posts/:id
 */
export const read = (ctx) => {
    const { id } = ctx.params;
    // 주어진 id 값으로 포스트 값을 찾습니다.(Find)
    // 파라미터로 받아 온 값은 문자열 형식이므로 파라미터를 숫자로 변환하거나
    // 비교할 p.id 값을 문자열로 변경해야 합니다.
    const post = posts.find((p) => p.id.toString() === id);
    // 포스트가 없으면 오류를 반환
    ErrorPage(post, ctx);
    ctx.body = post;
};

/* 특정 포스트 제거
 * DELETE /api/posts/:id
 */
export const remove = (ctx) => {
    const { id } = ctx.params;
    // 해당 id를 가진 post가 몇 번째인지 확인 (FindeIndex)
    const index = posts.findIndex((p) => p.id.toString() === id);
    // 포스트가 없으면 오류를 반환
    ErrorPage(index, ctx);
    // index번째 아이템을 제거합니다.
    posts.splice(index, 1);
    ctx.status = 204; // no Content
};

/* 포스트 수정(교체)
 * PUT /api/pots/:id
 * { title, body }
 */
export const replace = (ctx) => {
    // PUT 메서드는 전체 포스트 정보를 입력하여 데이터를 통째로 교체할 때 사용합니다.
    const { id } = ctx.params;
    // 해당 id를 가진 posts가 몇 번째인지 화인합니다.
    const index = posts.findIndex((p) => p.id.toString() === id);
    // 포스트가 없으면 오류를 발생시킵니다.
    ErrorPage(index, ctx);
    // 전체 객체를 덮어 씌웁니다.
    // 따라서 id를 제외한 기존 정보를 날리고, 객체를 새로 만듭니다.
    posts[index] = {
        id,
        ...ctx.request.body,
    };
    ctx.body = posts[index];
};

/* 포스트 수정(특정 필드 변경)
 * Patch /api/posts/:id
 * { title, body }
 */

export const update = (ctx) => {
    // PATCH 메서드는 주어진 필드만 교체합니다.
    const { id } = ctx.params;
    // 해당 id를 가진 posts가 몇 번째인지 확인합니다.
    const index = posts.findIndex((p) => p.id.toString() === id);
    // 포스트가 없으면 오류를 반환합니다.
    ErrorPage(index, ctx);
    // 기존 값에 정보를 덮어 씌웁니다.
    posts[index] = {
        ...posts[index],
        ...ctx.request.body,
    };
    ctx.body = posts[index];
};

function ErrorPage(index, ctx) {
    if (index === -1 || !index) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.',
        };
        return;
    }
}
