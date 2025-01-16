import styled from "styled-components";



export const NavTransactionsContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;

  margin-top: 3rem;
  margin-left: auto; 
  margin-right: auto; 

  button {
    display: flex;
    align-items: center;
    justify-content: center;



    background: transparent;
    border: 0;
    border-radius: 8px;
  }
`

export const DivTransactionButton = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-content: center;
`

interface NavTransactionsButtonProps {
    variant: 'active' | 'inactive' 
}

export const NavTransactionsButton = styled.button<NavTransactionsButtonProps>`
    width: 40px;
    height: 40px;
    display: flex;
    flex: 1;
    border: 0;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    outline: 0;

    background-color: ${(props) =>props.variant === "active" ? props.theme["green-500"] : props.theme["gray-700"]} !important;


    color: ${(props) =>
    props.variant === "active" ? props.theme.white : props.theme["gray-500"]} !important;
    

`;
