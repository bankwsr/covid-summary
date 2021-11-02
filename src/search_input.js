import React from "react";

const AppSearch = (props) => {
    const{ search, OnFilter } = props
    return (
        <div className="filter-form">
			<form className="search-form">
				<input
					className="search-bar"
					type="text"
					value={search}
					onChange={(e)=>{ OnFilter(e.target.value)}}/>
			</form>
		</div>
    );
}

export default AppSearch;