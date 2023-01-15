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