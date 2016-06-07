import React  from 'react';
import TextInput from '../components/text-input';
import TextArea from '../components/text-area';
import MarkdownEditor from '@insidersbyte/react-markdown-editor';
import ProjectMarkdown from '../components/project-markdown';

export default React.createClass({
	displayName: 'CreateProject',

	getInitialState() {
		return {
			markdown: ''
		}
	},

	onImageDrop(file) {
		return new Promise((resolve) => {
			resolve({
				file: null, // file name
				url: null // s3 file location
			})
		})
	},

	updateMarkdown(event) {
		this.setState({
			markdown: event.target.value
		});
	},

	render() {
		const { markdown } = this.state;
		return(
			<div className="container group">
				<div className="col span-1-of-2" style={{paddingRight: 0}}>
					<div className="form-card margin-small mt mr mb ml">
						<div className="form-body padding-small pt pr pb pl">
							<h1 className="hire-message text-center no-margin no-padding">Create Project</h1>
							<p className="text-center grey no-margin no-padding">Include as many images as possible</p>
							<form className="hire-form padding-small pr pb pl">
								<TextInput label={true} name="Date"/>
								<TextInput label={true} name="Name"/>
								<TextInput label={true} name="Slug"/>
								
								{/* Markdown Editor */}
								<label 
									className="form-input-label grey margin-small mt" 
									htmlFor={"markdown"}>
									Markdown
								</label>
								<MarkdownEditor
									value={markdown}
									onChange={this.updateMarkdown}
									onImageDrop={this.onImageDrop}
								/>
						
								<button type="text" 
								className="button big confirm bold all-caps margin-small mt">
									Create Project
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className="col span-1-of-2 no-padding hide-on-mobile">
					<div className="form-card margin-small mt mr mb ml">
						<div className="form-body padding-small pt pr pb pl">
							<ProjectMarkdown input={markdown}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
});