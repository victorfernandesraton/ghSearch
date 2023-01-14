import { TotalCount } from "../../types";

type Props = {
  id: string;
  email: string;
  login: string;
  avatarUrl: string;
  url: string;
  createdAt: Date;
  starredRepositories: TotalCount;
  followers: TotalCount;
  following: TotalCount;
  gistComments: TotalCount;
  bio?: string;
  bioHTML?: string;
  company?: string;
  name?: string;
  websiteUrl?: string;
  twitterUsername?: string;
  location?: string;
};

const UserInfo = (props: Props) => {

  return (
    <article>
        <img src={props.avatarUrl} />
        <h1>{props.login}</h1>
        <p>{props.bio}</p>
        {props.company && (
           <p>{props.company}</p>
        )}
        <p>Stars <span>{props.starredRepositories.totalCount}</span></p>
        <p>Followers <span>{props.followers.totalCount}</span></p>
        <p>following <span>{props.following.totalCount}</span></p>
    </article>
  ) 
};

export default UserInfo;
