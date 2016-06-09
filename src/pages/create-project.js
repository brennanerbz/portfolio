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
			data_uri: null,
			filename: '',
			filetype: '',
			markdown: '',
		}
	},

	postProject(event) {
		event.preventDefault();
		const project = {
			date: 		this.state.date,
			name: 		this.state.name,
			slug: 		this.state.slug,
			tags: 		this.state.tags.split(','),
			coverPhoto: this.state.data_uri,
			markdown:   this.state.markdown
		}
		axios
		.post('http://localhost:5100/api/v1/projects', project)
		.then(function(result) {
			console.log(result)
		})
		.catch(function(err) {
			console.error(err)
		})
	},

	onImageDrop(file) {
		var self = this;
		return new Promise((resolve) => {
			return self.handleFile(file, resolve)
		}).then((result) => {
			return new Promise((resolve) => {
				resolve({
					filename: file.name,
					url: result.data.Location
				})
			})
		}).then((res) => {
			return res;
		})
	},

	handleFile(event, cb) {
		var self = this;
		const file = event.name ? event : event.target.files[0];
		FileProcess(file).then((result) => {
			axios.put('http://localhost:5100/api/v1/s3', {
				file: result,
				filename: file.name,
				filetype: file.type
			}).then(function(result) {
				if(cb) return cb(result)
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
				<div style={{paddingRight: 0}}>
					<div className="form-card margin-small mt mr mb ml">
						<div className="form-body padding-small pt pr pb pl">
							<form className="hire-form padding-small pr pb pl">

								<TextInput 
									handleChange={(event) => {this.setState({date: event.target.value})}}
									type="date"
									label={true} 
									name="Date"/>

								<TextInput 
									handleChange={(event) => this.setState({name: event.target.value})}
									label={true} 
									name="Name"/>

								<TextInput 
									handleChange={(event) => this.setState({slug: event.target.value})}
									label={true} 
									name="Slug"/>

								{/* Tags */}
								<TextInput 
									handleChange={(event) => this.setState({tags: event.target.value})}
									label={true} 
									name="Tags"/>

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
														
								<button 
									onClick={this.postProject}
									type="text" 
									className="button big confirm bold all-caps margin-small mt">
									Create Project
								</button>

							</form>
						</div>
					</div>
				</div>
				<div className="no-padding hide-on-mobile">
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