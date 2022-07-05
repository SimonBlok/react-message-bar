import React, {ReactNode, useState} from "react";

interface AnnouncementBarProps {
	children: ReactNode,
	announcementId?: string //to keep new announcements visible after dismissing
}

const AnnouncementBar = ({children, announcementId = 'default-announcement'}: AnnouncementBarProps) => {
	const [isOpen, setIsOpen] = useState(null === localStorage.getItem(announcementId))

	const handleDismissBar = () => {
		localStorage.setItem(announcementId, 'dismissed')
		setIsOpen(false)
	}

	if (!isOpen) {
		return null
	}

	return <div className="react-message-bar--bar">
		<div
			className="react-message-bar--dismiss-button"
			onClick={handleDismissBar}
			aria-label="Dismiss announcement"
		>
			X
		</div>
		{children}
	</div>
}

export default AnnouncementBar
