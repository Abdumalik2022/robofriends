import React from "react";

const SearchBox = ({search}) => {
    return (
        <div>
            <input className={'pa3 bg-light-green bg-lightest-blue mb2'}
                   type="text"
                   placeholder={'Search robots'}
                   onChange={search}
            />
        </div>
    )

}

export default SearchBox