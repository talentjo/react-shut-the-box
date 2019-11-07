import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment } from '../actions/posts'

const PostSingle = ({ pathname, posts, increment }) => {
    // Find our single post by finding pathname slug in our posts state
    const slug = pathname.replace('/blog/', '');
    const index = posts.findIndex((post) => post.slug === slug)
    const post = posts[index];

    if (post) {
        return (
            <article>
                <p><em>Single blog post fetched from Redux store. We use the pathname slug to find the post in our store</em></p> 
                <h1>{post.title}</h1>
                <hr />
                <p>
                    <em>Click this button to increment the amount of likes. We dispatch a Redux 'increment' action and store the new value:</em>
                </p>
                <p>
                    <button onClick={ () => increment(index)}>❤️</button> {post.likes} likes
                </p>
                <hr />
                {post.body}
            </article>
        )
    } else {
        return (<h1>404</h1>)
    }
}

PostSingle.propTypes = {
    post: PropTypes.object,
    posts: PropTypes.array,
    pathname: PropTypes.string,
}

const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
    posts: state.posts,
})

const mapDispatchToProps = (dispatch) => ({
    increment: (index) => dispatch(increment(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostSingle)
