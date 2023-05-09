import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        author
        description
        person {
          age
          name
        }
        complexData {
          age
          name
        }
        simpleData
        title
      }
    }
  }
`;
const FetchData = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData);

  return (
    <div>
      {/* <h2>Name: {data.site.siteMetadata.person.name}</h2> */}
      <h2>Site title: {title}</h2>
    </div>
  );
};

export default FetchData;
