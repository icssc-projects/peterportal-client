import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  .ui.accordion .title:not(.ui), 
  .ui.secondary.menu .item, .hit-stats, 
  .sk-select select, 
  .search-module .is-focused input.sk-search-box__text {
    color: ${({ theme }) => theme.text};
  }

  .ui.secondary.menu .active.item {
    background: ${({ theme }) => theme.activeSelector};
  }

  .sk-search-box input.sk-search-box__text {
    color: ${({ theme }) => theme.activeSelector};
  }

  .sk-search-box__icon:before {
    filter: ${({ theme }) => theme.searchIconFilter};
  }

  .search-module .sk-search-box, .sk-select select {
    background: ${({ theme }) => theme.fieldBackground};
  }

  .search-module {
    background-color: ${({ theme }) => theme.body};
  }

  .navbar {
    background-color: ${({ theme }) => theme.body};
  }

  .hit_title {
      color: ${({ theme }) => theme.peterportalGradient};
  }
  `