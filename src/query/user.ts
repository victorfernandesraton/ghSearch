import { gql } from "@apollo/client";

export const USER_QUERY = gql`
query searchUser($username: String!) {
  search(query: $username, type: USER, first: 1) {
    nodes {
      ... on User {
        id
        email
        bio
        avatarUrl(size: 320)
        company
        createdAt
        isBountyHunter
        name
				login
        websiteUrl
        url
        twitterUsername
        starredRepositories {
          totalCount
        }
				bioHTML
        followers {
          totalCount
        }
        following {
          totalCount
        }
        gistComments {
          totalCount
        }
        location
        repositories(first: 50, orderBy: {field: CREATED_AT, direction: DESC}) {
          totalCount
          pageInfo {
            hasPreviousPage
            hasNextPage
            endCursor
            startCursor
          }
          edges {
            node {
              createdAt
              id
              name
              nameWithOwner
              resourcePath
              url
              updatedAt
              watchers {
                totalCount
              }
              stargazers {
                totalCount
              }
              description
              issues {
                totalCount
              }
              languages(first: 3) {
                edges {
                  node {
                    id
                    name
                  }
                }
								totalCount
              }
            }
          }
        }
      }
    }
  }
}
`