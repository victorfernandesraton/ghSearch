export type TotalCount = {
    totalCount: number;
}
type LanguageNode = {
	node: {
		id: string
		name: string
	}
}
type LanguagesType = {
	edges: LanguageNode[]
} & TotalCount

export type RepositoryType = {
	id: string,
	name: string,
	url: string
	watchers: TotalCount
	stargazers: TotalCount
	issues: TotalCount,
	languages: LanguagesType,
	description?: string
}

export type UserInfoType = {
	id: string;
	email?: string;
	login: string;
	avatarUrl: string;
	url: string;
	starredRepositories: TotalCount;
	followers: TotalCount;
	following: TotalCount;
	gistComments: TotalCount;
	bio?: string;
	company?: string;
	name?: string;
	location?: string;
	repositories: TotalCount;
};