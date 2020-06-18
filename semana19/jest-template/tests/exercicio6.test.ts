import {FeedDatabase} from "../src/FeedDatabase";

test("Create Post", async () => {
    const post = {
        id: "123456",
        photo: "fotaum",
        description: "teste mala",
        created_date: "2020-05-05",
        type: "evento",
        id_user: "d4608a09-4cab-4775-ba1d-06d72f271a65"
    };

    /*await new FeedDatabase().createPost(
        post.id,
        post.photo,
        post.description,
        post.created_date,
        post.type,
        post.user_id);*/
    const postFromDb = await new FeedDatabase().getPostById(post.id);

    expect(postFromDb).not.toBe(undefined);
    expect(postFromDb).toEqual({
        id: "123456",
        photo: "fotaum",
        description: "teste mala",
        created_date: "2020-05-05T03:00:00.000Z",
        type: "evento",
        id_user: "d4608a09-4cab-4775-ba1d-06d72f271a65"
    });

});