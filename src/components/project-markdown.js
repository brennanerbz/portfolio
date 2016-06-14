import React  from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './code-block';

export default React.createClass({
	displayName: 'ProjectMarkdown',

	render() {
		const { input } = this.props || '';
		return(
			<div className="project-markdown">
				<div className="markdown-body">
					<ReactMarkdown 
						source={input}
						renderers={Object.assign({}, ReactMarkdown.renderers, {
							CodeBlock: CodeBlock
						})}/>
				</div>
			</div>
		);
	}
});
