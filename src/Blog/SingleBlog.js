import React from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { useSinglePost } from "../custom-hooks";

const SingleBlog = () => {
  const { id } = useParams();
  const [post, isLoading] = useSinglePost(id);
  console.log("post", post);

  const renderSinglePost = () => {
    if (isLoading) return <p>Loading...</p>;

    return (
      <>
        <div id="layout" className="pure-g">
          <div className="content pure-u-1 pure-u-md-3-4">
            <div>
              <div className="posts">
                <Link to="/blogList" className="content-subhead">
                  Blog Posts
                </Link>

                <section className="post">
                  <header className="post-header">
                    <img
                      src={post?.blogImage.fields.file.url}
                      title={post?.fields?.blogTitle}
                      alt=""
                      width="578"
                      height="291"
                    />
                    <h2 className="post-title pt-3">{post?.blogTitle}</h2>
                    <p className="post-meta">
                      By{" "}
                      <a
                        href="https://thecodeangle.com/"
                        className="post-author"
                      >
                        {post?.blogAuthor}
                      </a>{" "}
                      Date <span></span>
                      <small>
                        {post?.fields?.createdDate === undefined
                          ? "loading"
                          : new Intl.DateTimeFormat("en-GB", {
                              month: "long",
                              day: "2-digit",
                              year: "numeric",
                            }).format(new Date(post?.createdDate))}
                      </small>
                    </p>
                  </header>
                  <div className="post-description">
                    <ReactMarkdown children={post?.postContent} />,
                  </div>
                </section>
              </div>
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
      </>
    );
  };

  return (
    <HelmetProvider>
      <Helmet title={post?.blogTitle} />
      {renderSinglePost()}
    </HelmetProvider>
  );
};

export default SingleBlog;
