import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import { useFilterContext } from '../filtercontext';
const Sort = () => {
  const { width } = useGlobalContext();
  const { updateSort } = useFilterContext();
  return (
    <Wrapper>
      <div className='line'></div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='sort'>sort by</label>
        <select
          name='sort'
          id='sort'
          // value={sort}
          onChange={updateSort}
          className='sort-input'
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a - z)</option>
          <option value='name-z'>name (z - a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

export default Sort;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .line {
    width: 75%;
    height: 3px;
    background: #000;
  }
  .sort-input {
    border: 1px solid #bababa;
    outline: none;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
    margin-right: 0.8rem;
  }
`;
