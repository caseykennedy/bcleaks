// CreatePost Styles:

// ___________________________________________________________________

import styled from 'styled-components'

// Theme
import theme from '../../../gatsby-plugin-theme-ui'
import { Box } from '../../../components/ui'

// ___________________________________________________________________

export const CreatePost = styled(Box)`
  background: ${theme.colors.black};
  border: ${theme.border};

  .title {
    background: ${theme.colors.black};
    border-bottom: ${theme.border};
    margin-bottom: ${theme.space[4]};
    padding: ${theme.space[4]};
  }

  .react-tabs {
    padding: ${theme.space[4]};

    &__tab-list {
      border-bottom: none;
      margin-bottom: ${theme.space[6]};
    }

    &__tab {
      border: ${theme.border};
      border-right: none;
      border-radius: 0;
      padding: ${theme.space[2]} ${theme.space[4]};

      &:last-child {
        border-right: ${theme.border};
        border-left: none;
      }

      &:hover,
      &--selected {
        background: ${theme.colors.primary};
        color: ${theme.colors.black};
      }
    }
  }
`

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;

  legend {
    padding-bottom: ${theme.space[3]};
    width: 100%;
  }

  fieldset {
    border: none;
    margin: 0 auto;
    padding: 0;
    width: 100%;

    label {
      display: none;
    }

    input,
    textarea,
    select {
      background: transparent;
      border: 0;
      border: ${theme.border};

      font-size: ${theme.fontSizes[2]};
      margin: 0 0 ${theme.space[4]} 0;
      padding: ${theme.space[2]} ${theme.space[2]};
      width: 100%;

      &:focus {
        border-color: ${theme.colors.primary};
        outline: none;
      }

      &::placeholder {
        color: ${theme.colors.tertiary};
      }
    }

    .form-group {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;

      @media ${theme.mq.tablet} {
        padding-bottom: ${theme.space[3]};
      }

      &__box {
        &:first-child {
          padding-left: 0;
        }

        @media ${theme.mq.tablet} {
          padding-bottom: 0;
          padding-left: ${theme.space[3]};
        }
      }

      .form-heading {
        display: block;
        font-weight: 500;
        padding-bottom: calc(${theme.root.space} / 3.5);
        text-align: left;
        width: 100%;
      }
    }
  }

  button {
    background: transparent;
    border: ${theme.border};
    color: ${theme.colors.lightgray};
    font-size: ${theme.fontSizes[2]};

    margin: ${theme.space[5]} 0 0 0;
    padding: ${theme.space[4]};
    cursor: pointer;
    transition: ${theme.transition.all};
    width: 100%;

    &:hover {
      background: ${theme.colors.darkgray};
    }
  }

  .errors {
    font-size: 0.9rem;
    font-weight: 500;
    color: red;
    padding-top: calc(${theme.root.space} / 6);
    padding-bottom: 0;
    margin: 0;
    transition: ${theme.transition};
  }

  .react-datepicker-wrapper {
    width: 100%;
  }
`
