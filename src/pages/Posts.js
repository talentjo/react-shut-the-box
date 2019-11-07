import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment } from '../actions/posts'
import { Link } from 'react-router-dom'

const Posts = ({posts}) => {
  return(
    <div>
        <p><em>Blog posts fetched from Redux store</em></p>
        {posts.map((post, i) => {
            return (
                <div key={i} i={i}>
                    <h3>
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p><button>❤️</button> {post.likes} likes</p>
                </div>
            )
        })}
    </div>
  )
}

Posts.propTypes = {
    posts: PropTypes.array,
    increment: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    posts: state.posts
})

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
