import React, { useState, useEffect } from "react";
// import { Provider, defaultTheme, Button } from '@adobe/react-spectrum';
import { graphql } from "gatsby";
// import storage from "local-storage-fallback";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import MainCard from "../components/MainCard";

const loadsPer = 15;

const IndexPage = ({ data }) => {
  // const savedTheme = JSON.parse(storage.getItem("theme")) || "light";
  const [loaded, setLoaded] = useState(undefined);
  // const [currentColorScheme, setCurrentColorScheme] = useState(savedTheme ? savedTheme.mode : 'light');
  const posts = data.allMdx.edges;

  useEffect(() => {
    const curLoad = sessionStorage.getItem("curLoad") || loadsPer;
    setLoaded(parseInt(curLoad));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const lastPostLoaded = document.querySelector(
      "div.posts-list > a:last-child"
    );
    const lastPostLoadedOffset =
      lastPostLoaded.offsetTop + lastPostLoaded.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;

    if (pageOffset > lastPostLoadedOffset) {
      // Stops loading
      if (posts.length > loaded)
        setLoaded(prev => {
          sessionStorage.setItem("curLoad", prev + loadsPer);
          return prev + loadsPer;
        });
    }
  };

  return (
    // <Provider theme={defaultTheme} colorScheme={currentColorScheme}>
    <Layout>
      <SEO title="デフテックの語学旅" />
      <MainCard posts={posts} loads={loaded} />
      {/* <MainCard posts={posts} loads={loaded} setCurrentColorScheme={setCurrentColorScheme} currentColorScheme={currentColorScheme} /> */}
    </Layout>
    // </Provider>
  );
};

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          id
          body
          excerpt(pruneLength: 180, truncate: true)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MM/DD/YYYY")
            title
            tags
            excerpt
            draft
            socialImage{
              childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
