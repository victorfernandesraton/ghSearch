import { gql } from "@apollo/client";

export const USER_QUERY = gql`
query searchUser($username: String!) {
  search(query: $username, type: USER, first: 10) {
    nodes {
      ... on User {
        id
        email
        bio
        avatarUrl(size: 10)
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
      }
    }
  }
}
`