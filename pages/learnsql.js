import React from 'react';
import { withRouter } from 'next/router';
import Axios from 'axios';

import Admin from '../webjs/pages/admin';
import PlugTable from '../webjs/plugs/table';
import PlugDialog from '../webjs/plugs/dialog';
import PlugFormItem from '../webjs/plugs/formitem';

class Sql extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			thead: [
				{label: '姓名', prop: 'name', type: 'default'},
				{label: '性别', prop: 'sex', type: 'default'},
				{label: '年龄', prop: 'age', type: 'default'},
				{label: '描述', prop: 'des', type: 'default'},
				{label: '操作', operation: [{name: '修改'}, {name: '删除'}], type: 'operation'}
			],
			tableData: [],
			dialogTitle: '新增',
			dialogVisible: false,
			formData: {
				name: '',
				sex: '',
				age: '',
				des: ''
			}
		}
	}

	componentDidMount () {
		this.getTableData();
	}

	initFormData () {
		this.setState(Object.assign(this.state.formData, {
			name: '',
			sex: '',
			age: '',
			des: ''
		}));
	}

	getTableData () {
		Axios.get('/api/getData').then((res) => {
			this.setState({tableData: res.data});
		})
	}

	handlerClose () {
		this.setState({dialogVisible: false});
	}

	onOpenDialog () {
		this.setState({dialogVisible: true});
		this.initFormData();
	}

	onConfirm () {
		if (this.state.dialogTitle === '新增') {
			let params = this.state.formData;
			Axios.get('/api/addInfo', {params: params}).then((res) => {

			})
		}
		if (this.state.dialogTitle === '修改') {
			let params = this.state.formData;
			Axios.get('/api/modInfo', {params: params}).then((res) => {

			})
		}
		this.getTableData();
		this.handlerClose();
	}

	inputVal (label, value) {
		let obj = {};
		obj[label] = value;

		this.setState(Object.assign(this.state.formData, obj));
	}

	handlerOperation(name, lineData) {
		if (name === '修改') {
			this.setState({dialogTitle: name});
			this.setState({dialogVisible: true});
			this.setState(Object.assign(this.state.formData, lineData));
		}
		if (name === '删除') {
			const params = {
				id: lineData.person_id
			};
			Axios.get('/api/delInfo', {params: params}).then((res) => {
				if (res.data.success) {
					this.getTableData();
				}
			})
		}
	}

	render() {
		const dialogFooter = (
			<div className={'dialog-footer'}>
				<button onClick={() => this.setState({dialogVisible: false})}>取消</button>
				<button onClick={() => this.onConfirm()}>确定</button>
				<style jsx>{`
					.dialog-footer {
						padding: 8px 10px;
						text-align: right;
					}
					button {
						background: #fff;
						border: 1px solid #999;
						border-radius: 3px;
						padding: 6px 12px;
						cursor: pointer;
						out-inline: none;
						margin-left: 12px;
					}
					
				`}</style>
			</div>
		);

		const formData = this.state.formData;
		const dialogContent = (
			<div className={'mod-form'}>
				<div className={'form-line'}>
					<PlugFormItem label="姓名">
						<input type="text" value={formData.name}
						   placeholder="请输入姓名"
						   onChange={(e) => this.inputVal('name', e.target.value)}
						/>
					</PlugFormItem>
					<PlugFormItem label="性别">
						<input type="text" value={formData.sex}
						   placeholder="请输入性别"
						   onChange={(e) => this.inputVal('sex', e.target.value)}
						/>
					</PlugFormItem>
				</div>
				<div>
					<PlugFormItem label="年龄">
						<input type="text" value={formData.age}
						   placeholder="请输入年龄"
						   onChange={(e) => this.inputVal('age', e.target.value)}
						/>
					</PlugFormItem>
					<PlugFormItem label="描述">
						<textarea name="" id="" rows="3" value={formData.des}
							placeholder="请输入描述"
						  	onChange={(e) => this.inputVal('des', e.target.value)}
						></textarea>
					</PlugFormItem>
				</div>



				<style jsx>{`
					.mod-form {
						width: 600px;
						padding: 40px 30px;
					}
					.form-line {
						margin-bottom: 30px;
					}
					input {
						border:1px solid #bbb;
                        height: 24px;
                        padding-left: 4px;
					}
					textarea,input {
						width: 175px;
					}
					
				`}</style>
			</div>
		);

		return (
			<Admin>
				<div className="learSql">
					<div className={'optWarp'}>
						<button onClick={() => this.onOpenDialog()}>新增</button>
					</div>
					<PlugTable
						thead={this.state.thead}
						tableData={this.state.tableData}
					   	onOperation={(name, lineData) => this.handlerOperation(name, lineData)}
					/>
					<PlugDialog
						title={this.state.dialogTitle}
						footer={dialogFooter}
						children={dialogContent}
						visible={this.state.dialogVisible}
						onClose={() => this.handlerClose()}
					>
					</PlugDialog>
				</div>

				<style jsx>{`
					.learSql {
						padding: 100px;
						
					}
					.optWarp {
						overflow: hidden;
						padding-bottom: 20px;
					}
					.optWarp button {
						float: right;
						background: #fff;
						border: 1px solid #999;
						border-radius: 3px;
						padding: 6px 10px;
						cursor: pointer;
					}

					
				`}</style>
			</Admin>
		)
	}
}

export default withRouter(Sql);
