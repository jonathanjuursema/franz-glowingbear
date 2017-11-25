module.exports = Franz => {
	const getMessages = function getMessages() {
		let indirectElements = document.querySelectorAll('.badge:not(.danger)');
		let direct = document.querySelectorAll('.badge.danger').length - 1;
		let indirect = -1;
		for (let i = 0; i < indirectElements.length; i += 1) {
			if (indirectElements[i].innerHTML.length > 0) indirect++;
		}
		Franz.setBadge(Math.max(direct, 0), Math.max(indirect, 0));
	};
	Franz.loop(getMessages);
};
