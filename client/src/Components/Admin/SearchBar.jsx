import styled from "styled-components";
import { Icon } from "@blueprintjs/core";
// import { DataContext } from "../../App";
import React, { useContext, useState } from "react";

const SearchBar = (props) => {
  //   const { searchQuery, setSearchQuery } = useContext(DataContext);

  const searchQuery = props.props.searchQuery;
  const setSearchQuery = props.props.setSearchQuery;

  const cancel = () => {
    setSearchQuery("");
  };

  return (
    <SearchWrapper>
      <SearchInput>
        <StyledIcon icon="search" size={15} />
        <Search
          type="text"
          onChange={(event) => {
            setSearchQuery(event.target.value);
          }}
          placeholder="Search..."
          value={searchQuery}
        />
        {searchQuery ? (
          <ClearBtn onClick={cancel}>
            <StyledIcon icon="cross" size={20} />
          </ClearBtn>
        ) : (
          <div></div>
        )}
      </SearchInput>
    </SearchWrapper>
  );
};

export default SearchBar;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const SearchInput = styled.form`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid lightgray;
  color: white !important;
  padding: 8px 10px;
  width: 600px;
  height: fit-content;
  width: 100%;
  &:focus-within {
    border: 1px solid lightgray;
  }
`;

const Search = styled.input`
  padding: 5px 10px;
  font-size: 16px;
  border: 0;
  height: inherit;
  text-overflow: ellipsis;
  width: 100%;
  &::placeholder {
    color: gray;
  }
  &:focus {
    outline: none;
  }
`;

const StyledIcon = styled(Icon)`
  fill: gray;
  display: flex;
  align-items: center;
`;

const ClearBtn = styled.div`
  padding: 5px;
  border-radius: 999px;
  &:hover {
    &:hover {
      :first-child {
        fill: red;
      }
    }
  }
`;
