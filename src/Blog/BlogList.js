import React from "react";
import { Link } from "react-router-dom";

import { usePosts } from "../custom-hooks";
import { Helmet, HelmetProvider } from "react-helmet-async";

const BlogList = () => {
  const [posts, isLoading] = usePosts();
  console.log("posts", posts);

  const renderPosts = () => {
    if (isLoading) return <p>Loading...</p>;

    return posts?.map((post) => (
      <section className="post" key={post.sys.id}>
        <header className="post-header">
          <img
            src={post.fields.blogImage.fields.file.url}
            title={post.fields.blogTitle}
            alt=""
            width="578"
            height="291"
          />
          <h2 className="post-title pt-3">{post.fields.blogTitle}</h2>
          <p className="post-meta">
            By{" "}
            <a href="https://thecodeangle.com/" className="post-author">
              {post.fields.blogAuthor}
            </a>{" "}
            Date <span></span>
            <small>
              {new Intl.DateTimeFormat("en-GB", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              }).format(new Date(post.fields.createdDate))}
            </small>
          </p>
        </header>
        <div className="post-description">
          <p>{post.fields.blogSummary}</p>
          <Link
            to={`/blogDetails/${post.fields.blogSlug}`}
            className="button button1"
          >
            Read More
          </Link>
        </div>
      </section>
    ));
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>yo</title>
        <meta name="description" content="hello" />
      </Helmet>

      <div id="layout" className="pure-g">
        <div className="content pure-u-1 pure-u-md-3-4">
          <div>
            <div className="posts">
              <h1 className="content-subhead">Web Dev Blog</h1>
            </div>

            {renderPosts()}

            <div className="footer">
              <div className="pure-menu pure-menu-horizontal">
                <div className="pure-menu-item">
                  <a
                    href="http://twitter.com/thecodeangle"
                    className="pure-menu-link"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default BlogList;
