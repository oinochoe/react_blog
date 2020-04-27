import Post from './models/post';

export default function createFakeData() {
    // 0, 1...39 로 이루어진 배열을 생성한 후 포스트 데이터로 변환
    const posts = [...Array(40).keys()].map((i) => ({
        title: `포스트 #${i}`,
        // https://www.lipsum.com/에서 복사한 200자 이상의 텍스트
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel sollicitudin neque, nec sodales eros. Duis ultrices condimentum pretium. Proin hendrerit nec justo non cursus. Quisque at tempor turpis, sed blandit dolor. Donec nec metus quis felis faucibus laoreet. Ut eu ligula ut diam pulvinar facilisis sed a justo. Etiam tempus ornare massa, venenatis suscipit odio commodo quis. Praesent faucibus diam diam, ac egestas diam maximus non. Fusce ornare imperdiet risus sed varius. Nulla a est nibh. Quisque et auctor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla velit ut urna commodo pellentesque. Nam mattis odio at risus congue aliquam.
                Morbi luctus vel velit a dictum. Phasellus sagittis sodales nunc. Cras eu accumsan nisi. Quisque mauris urna, varius vitae massa vitae, finibus pulvinar nisi. Nullam consectetur lacus et purus faucibus, in dignissim sem lacinia. Ut gravida magna ut euismod venenatis. Curabitur neque elit, pretium sit amet metus ut, efficitur sodales arcu. Donec quis pharetra nulla. Maecenas id ante velit. Vivamus consectetur consequat nunc eget dignissim. Mauris pretium mi eget fermentum vulputate.Sed gravida pulvinar quam, sit amet mollis quam interdum vel. Maecenas volutpat lorem sem, a fermentum neque vulputate a. Nullam at mi eu lacus tincidunt tristique. Quisque mattis blandit turpis, quis auctor libero eleifend ac. Nullam mauris ipsum, volutpat sed tempus quis, tempus sed ante. Fusce finibus finibus ullamcorper. Praesent ut ante posuere, feugiat augue nec, eleifend nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc at convallis ex, et venenatis odio. Nulla condimentum metus nec neque tincidunt, rutrum euismod augue imperdiet. Fusce eu mauris fringilla, dapibus leo quis, molestie lectus. Pellentesque sagittis mollis libero nec ultrices.
                Proin consequat enim eu tincidunt placerat. Vivamus accumsan tortor id leo sagittis, quis ullamcorper arcu sagittis. Aenean pharetra ac odio a laoreet. In vel suscipit leo, at rhoncus erat. Pellentesque placerat auctor nulla quis tempus. Etiam eu elit vestibulum, tincidunt justo id, venenatis lectus. Nam lectus tellus, bibendum nec dignissim at, faucibus a magna. Proin tincidunt odio augue, eu viverra lorem pulvinar a. Pellentesque semper mi vulputate tempus ullamcorper. Fusce magna orci, rutrum non ornare in, bibendum nec lacus. Sed blandit scelerisque placerat. Sed nulla nisi, ullamcorper eu aliquet eget, ullamcorper eget urna.
                Nunc mollis malesuada consectetur. Etiam at massa at mi bibendum tincidunt. Nunc nec lacinia nisi. Suspendisse arcu magna, consectetur ut lacinia sed, facilisis vitae tellus. Nunc ut molestie felis, ac ultrices sapien. Donec sagittis nunc non imperdiet laoreet. Donec vel turpis quis diam tempor faucibus. Ut convallis ante sed metus dictum tincidunt.`,
        tags: ['가짜', '데이터'],
    }));
    Post.insertMany(posts, (err, docs) => {
        // console.log(docs);
        console.log('insertmany 성공');
    });
}
