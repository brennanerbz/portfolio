import React  from 'react';
import ReactMarkdown from 'react-markdown';

var input = '# This is a header\n\nAnd this is a paragraph\n\n```code```';

export default React.createClass({
	displayName: 'ProjectMarkdown',

	render() {
		return(
			<div className="project-markdown">
				<div className="markdown-body">
					<ReactMarkdown source={input}/>
				</div>
			</div>
		);
	}
});