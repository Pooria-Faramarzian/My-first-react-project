import React, { Component } from 'react';
//import { render } from '@testing-library/react';

class Person extends Component {
	render() {
		const { fullName, personDelete, changed } = this.props;
		return (
			<div className='card text-white bg-info my-3 col-6 col-md-4 mx-auto'>
				<div className='card-body text-center'>
					<p className='d-block'>{`${fullName}`}</p>
					<div className='input-group'>
						<input
							type='text'
							className='form-control'
							placeholder={fullName}
							onChange={changed}
						/>
						<div className='input-group-prepend'>
							<button
								className='btn btn-danger fa fa-trash'
								onClick={personDelete}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Person;
