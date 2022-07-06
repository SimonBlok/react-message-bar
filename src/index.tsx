import React, {ReactNode, useState} from "react";

interface MessageBarProps {
	children: ReactNode,
	messageId?: string //to keep new messages visible after dismissing
}

export const MessageBar = ({children, messageId = 'default-message'}: MessageBarProps) => {
	const [isOpen, setIsOpen] = useState(null === localStorage.getItem(messageId))

	const handleDismissBar = () => {
		localStorage.setItem(messageId, 'dismissed')
		setIsOpen(false)
	}

	if (!isOpen) {
		return null
	}

	return <div className="react-message-bar--bar">
		<div
			className="react-message-bar--dismiss-button"
			onClick={handleDismissBar}
			aria-label="Dismiss message"
		>
			X
		</div>
		{children}
	</div>
}
