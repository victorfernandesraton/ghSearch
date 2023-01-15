import React from 'react'

type Props = {
	title?: string
	message: string
}

function Feedback({ message, title }: Props) {
	return (
		<div>
			{title && (
				<h1>{title}</h1>
			)}
			<article>
				{message}
			</article>
		</div>
	)
}

export default Feedback