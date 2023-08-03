module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,ico,json,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};