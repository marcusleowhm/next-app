import { useRouter } from "next/router";

function Post( {post} ) {
    const router = useRouter();

    if (router.isFallback) {
        return <h1>loading...</h1>
    }

    return (
        <>
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
        </>
    )

}

export default Post;

export async function getStaticPaths() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`)

    const data = response.json();

    return {
        paths: [
            {
                params: { postId: '1' }
            },
            {
                params: { postId: '2' }
            },
            {
                params: { postId: '3' }
            },
        ],
        fallback: true
    }
}

export async function getStaticProps(context) {

    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);

    const data = await response.json();

    return {
        props: {
            post: data
        }
    }
}