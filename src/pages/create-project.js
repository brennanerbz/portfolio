import React  from 'react';
import app from 'ampersand-app';
import FileProcess from '../helpers/process-file';
import axios from 'axios';
import async from 'async';
import TextInput from '../components/text-input';
import FileInput from '../components/file-input';
import TextArea from '../components/text-area';
import MarkdownEditor from '@insidersbyte/react-markdown-editor';
import ProjectMarkdown from '../components/project-markdown';
import SelectTagList from '../components/select-tag-list';
import Vibrant from 'node-vibrant';

export default React.createClass({
	displayName: 'CreateProject',

	getInitialState() {
		return {
			_id: '',
			date: '', 
			name: '',
			slug: '',
			tags: [],
			data_uri: null,
			filename: '',
			filetype: '',
			markdown: '',
			categories: [
				'Web Design',
				'Web App Design',
				'Interaction Design',
				'Wireframes',
				'Mobile Web',
				'iOS Design',
				'Android Design',
				'Startup',
				'Photography',
				'Videography',
				'Film',
				'Music Video',
				'Commercial',
				'Front End Development',
				'Back End Development',
				'User Experience Design',
				'Branding',
				'Mobile Web Design'
			],
			color: ''
		}
	},

	componentDidMount() {
		var { editing, name } = this.props;
		var self = this;
		if(editing) {
			axios
			.get(app.apiUrl + `/projects/${name}`)
			.then(function(result) {
				console.log(result)
				self.setState({
					_id: result.data._id,
					date: result.data.date,
					name: result.data.name,
					slug: result.data.slug,
					tags: result.data.tags,
					markdown: result.data.markdown,
					data_uri: result.data.coverPhoto,
					color: result.data.color
				});
			})
			.catch(function(err) {
				console.error(err)
			})
		}
	},

	postProject(event) {
		event.preventDefault();
		const project = {
			date: 		this.state.date,
			name: 		this.state.name,
			slug: 		this.state.slug,
			tags: 		this.state.tags,
			coverPhoto: this.state.data_uri,
			color: 		this.state.color,
			markdown:   this.state.markdown
		}
		axios
		.post(app.apiUrl + '/projects', project)
		.then(function(result) {
			console.log(result)
		})
		.catch(function(err) {
			console.error(err)
		})
	},

	updateProject(event) {
		event.preventDefault();
		const project = {
			_id:     		this.state._id,
			update: {
				date: 		this.state.date,
				name: 		this.state.name,
				slug: 		this.state.slug,
				tags: 		this.state.tags,
				markdown:   this.state.markdown,
				coverPhoto: this.state.data_uri,
				color: 		this.state.color
			}
		}
		axios
		.put(app.apiUrl + '/projects', project)
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
			// Color
			let photo = result;
			let v = new Vibrant(photo);
			v.getPalette(function(e, palette) {
				self.setState({
					color: palette.Vibrant.rgb
				});
			})	
			// Upload to s3
			axios.put(app.apiUrl + '/s3', {
				file: result,
				filename: file.name,
				filetype: file.type,
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
					<div className="form-card margin-small mt mr mb ml no-margin-on-mobile nmr nml">
						<div className="form-body padding-small pt pr pb pl">
							<form className="hire-form padding-small pr pb pl">

								<TextInput 
									value={this.state.date}
									handleChange={(event) => {this.setState({date: event.target.value})}}
									type="date"
									label={true} 
									name="Date"/>

								<TextInput 
									value={this.state.name}
									handleChange={(event) => this.setState({name: event.target.value})}
									label={true} 
									name="Name"/>

								<TextInput 
									value={this.state.slug}
									handleChange={(event) => this.setState({slug: event.target.value})}
									label={true} 
									name="Slug"/>

								{/* Tags */}
								<SelectTagList
									categories={this.state.categories}
									handleClick={(tag) => {
										const tags = this.state.tags;
										tags.push(tag);
										this.setState({
											tags: tags
										});
									}}
									tags={this.state.tags}
								/>

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
									onClick={this.props.editing ? this.updateProject : this.postProject}
									type="text" 
									className="button big confirm bold all-caps margin-small mt">
									{this.props.editing ? 'Update' : 'Create'} Project
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