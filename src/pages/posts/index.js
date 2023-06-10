import { Card, Row, Text } from '@nextui-org/react';
import Link from 'next/link';

function PostList({ posts }) {
    return (
        <div className="container">
            <h1>List of posts</h1>
            <br />

            {/* Implement UI to display posts */}
            {
                posts.map((post) => {
                    return (
                        <Card key={post.id} className='card text-bg-light mb-3'>
                            <Row justify='center' align='center'>

                                <Link href={`posts/${post.id}`} passHref>
                                    <Text h2 size={15} color='black'>{post.id} {post.title}</Text>
                                </Link>
                            </Row>
                        </Card>
                    )
                })
            }

        </div>
    );
}

export default PostList;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await response.json();

    return {
        props: {
            posts: data.slice(0, 5)
        }
    }
}