import React from 'react';
import FilterType from "../const/filterType";

const FilterBy = React.memo(({onClick}) => {
    return <div className="dropdown">
        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
            Filter By:
    </button>
        <div className="dropdown-menu">
            {FilterType.map(filter => <a className="dropdown-item" key={filter.key} onClick={() => onClick(filter.key)}>{filter.name}</a>)}
        </div>
    </div>
})

export default FilterBy;