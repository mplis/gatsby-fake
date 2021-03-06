import React from 'react';
import Link from 'gatsby-link';

const PostsPage = ({ data: { allPlaceholderPost: { posts } } }) => {
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(({ post: { id, title, author } }) =>
                    <li key={id}>
                        <Link to={`/posts/${id}`}>
                            {title} (<small>{author.name}</small>)
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default PostsPage;

export const pageQuery = graphql`
    query PostsQuery {
        allPlaceholderPost {
            posts: edges {
                post: node {
                    id
                    title
                    author: parent {
                        ... on PlaceholderUser {
                            name
                        }
                    }
                }
            }
        }
    }
`;
