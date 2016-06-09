import React  from 'react';
import FileProcess from '../helpers/process-file';
import axios from 'axios';
import async from 'async';
import TextInput from '../components/text-input';
import FileInput from '../components/file-input';
import TextArea from '../components/text-area';
import MarkdownEditor from '@insidersbyte/react-markdown-editor';
import ProjectMarkdown from '../components/project-markdown';

export default React.createClass({
	displayName: 'CreateProject',

	getInitialState() {
		return {
			date: '', 
			name: '',
			slug: '',
			markdown: '',
			data_uri: null,
			filename: '',
			filetype: ''
		}
	},


	onImageDrop(file) {
		var self = this;
		return new Promise((resolve) => {
			return self.handleFile(file, resolve)
		})
		.then((result) => {
			console.log(result)
			return new Promise((resolve) => {
				resolve({
					filename: file.name,
					url: result.data.Location
				})
			})
		})
		.then((res) => {
			console.log(res)
			return res;
		})
	},

	handleFile(event, cb) {
		var self = this;
		const file = event.name ? event : event.target.files[0];
		FileProcess(file).then((result) => {
			axios.put('http://localhost:8080/api/v1/s3', {
				file: result,
				filename: file.name,
				filetype: file.type
			})
			.then(function(result) {
				if(cb) {
					return cb(result)
				}
				self.setState({
					data_uri: result.data.Location
				});
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
							<form className="hire-form padding-small pr pb pl">
								<TextInput label={true} name="Date"/>
								<TextInput label={true} name="Name"/>
								<TextInput label={true} name="Slug"/>

								{/* Tags */}
								<TextInput label={true} name="Tags"/>

								{/* Cover Photo */}
								<label 
									className="form-input-label grey margin-small mt" 
									htmlFor={"cover-photo"}>
									Cover Photo
								</label>
									
								<FileInput 
									className="custom-file-input all-caps margin-tiny mt"
									name="cover-photo" 
									handleUpload={this.handleFile}/>
								
								{
									this.state.data_uri
									&&
									<img src={this.state.data_uri}/>
								}

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