var Lists = React.createClass({
	render: function () {
		return (
			<h1>Hello {this.props.name} my friends</h1>
		);
	}
});
ReactDOM.render(
	<div>
		<Lists name="name1"/>
		<Lists name="name2"/>
		<Lists name="name3"/>
	</div>,
	document.getElementById("container")
);


