type SwitchContentParams = {
	isLoading: boolean,
	isCalled: boolean,
	NotFound: boolean,
	error?: Error
}

type SwitchContentResponse = {
	title: string,
	message: string
}

export function switchContent({
	isCalled,
	isLoading,
	error,
	NotFound,
}: SwitchContentParams): SwitchContentResponse | undefined {
	if (!isCalled) {
		return {
			title: `Let's go baby!!!`,
			message: 'Please search an user'
		}
	}

	if (isLoading) {
		return {
			title: 'Almost redy',
			message: 'your search is loading, Please wait....'
		}
	}

	if (error) {
		return {
			title: 'Oops...',
			message: error.message
		}
	}

	if (isCalled && NotFound) {
		return {
			title: 'Oops...',
			message: "User not found in github basis"
		}
	}
}