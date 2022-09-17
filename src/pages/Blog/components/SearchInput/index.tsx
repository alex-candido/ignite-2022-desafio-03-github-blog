import React from 'react';
import { SearchInputContainer } from './styles';

const SearchInput: React.FC = () => {
  return (
    <SearchInputContainer>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>

      <input type="text" placeholder="Burcar conteúdo" />
    </SearchInputContainer>
  );
};

export default SearchInput;
