import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme["zinc-900"]};
    color: ${(props) => props.theme["zinc-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["zinc-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme["teal-600"]};
    color: ${(props) => props.theme["teal-600"]};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme["teal-600"]};
      border: 1px solid ${(props) => props.theme["teal-600"]};
      color: ${(props) => props.theme["zinc-200"]};
    }

    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme["teal-700"]};
    }
  }
`;
